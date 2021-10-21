import { useState, useEffect } from "react";
import { FiLink2, FiUpload, FiChevronLeft, FiChevronRight, FiSunset } from "react-icons/fi";
import { FaRemoveFormat, FaFilePdf, FaStar, FaYoutube, FaReact, FaLaravel, FaCuttlefish, FaJava } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
	MainContent,
	Container,
	CardHeader,
	Wrapper,
} from "../styles/pages/generalStyles";
import { SessionExercise, InputSelect, ContentAddExercise, TextInputGroup, } from "../styles/pages/exerciseStyles";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal/ModalAlert";
import Input from "../components/Input";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { storage } from "../firebase/config";
import { Exercise } from "../types/geralTypes";
import { addExercises, getAllExirceses} from "../services/exercisesServer";
import { getUserProfile } from "../utils";
import { DocumentChange, onSnapshot, QuerySnapshot } from "@firebase/firestore";

const Exercises = () => {
	const [clearForm, setClearForm] = useState(false);
	const [listaExercises, setListaExercises] = useState<any>();
	const [fileToSend, setFileToSend] = useState<any>();
	const [form, setForm] = useState<Exercise>({ exercise: "", title:"", category: "", description:"", year_send: "", file: "", especially_for:""});
	useEffect(() => {
		const exercisesRef = getAllExirceses();
		const getAllExerses= ()=>{
		   onSnapshot(
			exercisesRef,
			(querySnapshot: QuerySnapshot) => {
				if (querySnapshot.empty) {
				}else{
					querySnapshot.docChanges().forEach((changes: DocumentChange) => {
						console.log(changes.doc.data());
					  })
				}
			})
		}
			getAllExerses();
	}, [])

	const uploadImage = (e: any) => {
		setFileToSend(e.target.files[0]);
		/*const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setFile(reader.result);
			}
		}
		reader.readAsDataURL(e.target.files[0]);
*/
	}

	const onSendFile = async()=>{
		const fileRef = await ref(storage, `documents/${fileToSend?.name}`);
		await uploadBytes(fileRef, fileToSend);
		const filedoc = await getDownloadURL(fileRef);
		return filedoc;
	}
	const onSubmit= async(e:any)=>{
		e.preventDefault();
		const filesSend :any = await onSendFile();
	    form.file = filesSend;
		const  exerciseData= await addExercises(form);
		console.log(exerciseData);
	}
	return (
		<MainContent>
			<Container>
				<CardHeader
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<div>
						<h2>Lista de exercícios</h2>
					</div>
					<Button onClick={() => setClearForm(true)}>Enviar Exercícios</Button>
				</CardHeader>
				<Wrapper>
					<SessionExercise>
						<h2>Sessão de matemática</h2>
						<div className="roll">
							<span><FiChevronLeft /></span>
							<span><FiChevronRight /></span>
						</div>
						<div className="session-card">
							<Link to="/exercises/list">
								<div className="exercise">
									<div className="card-exec">
										<span><FaRemoveFormat /></span>
										<h3>29328</h3>
									</div>
									<div className="name-exec">
										<span>Exercícios de matemática basíca</span>
									</div>
									<div>
										<div className="classification">
											<span><FaStar></FaStar></span>
											<span><FaStar></FaStar></span>
											<span><FaStar></FaStar></span>
											<span><FaStar></FaStar></span>
										</div>
									</div>
								</div>
							</Link>
							<div className="exercise">
								<div className="card-exec">
									<span><FaRemoveFormat /></span>
									<h3>8</h3>
								</div>
								<div className="name-exec">
									<span>Exercicios de integral calculo 2</span>
								</div>
								<div>
									<div className="classification">
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
									</div>
								</div>
							</div>
						</div>





					</SessionExercise>
					<SessionExercise>
						<h2>Fisíca geral</h2>
						<div className="roll">
							<span><FiChevronLeft /></span>
							<span><FiChevronRight /></span>
						</div>
						<div className="session-card">
							<div className="exercise">
								<div className="card-exec">
									<span><FiSunset /></span>
									<h3>28</h3>
								</div>
								<div className="name-exec">
									<span>Exercícios de queda livre</span>
								</div>
								<div>
									<div className="classification">
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
									</div>
								</div>
							</div>
							<div className="exercise">
								<div className="card-exec">
									<span><FiSunset /></span>
									<h3>17</h3>
								</div>
								<div className="name-exec">
									<span>Exercicios de Vectores</span>
								</div>
								<div>
									<div className="classification">
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
									</div>
								</div>
							</div>
						</div>
					</SessionExercise>
					<SessionExercise>
						<h2>Programação web</h2>
						<div className="roll">
							<span><FiChevronLeft /></span>
							<span><FiChevronRight /></span>
						</div>
						<div className="session-card">
							<div className="exercise">
								<div className="card-exec">
									<span><FaReact /></span>
									<h3>28</h3>
								</div>
								<div className="name-exec">
									<span>Exercícios de queda livre</span>
								</div>
								<div>
									<div className="classification">
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
									</div>
								</div>
							</div>
							<div className="exercise">
								<div className="card-exec">
									<span><FaLaravel /></span>
									<h3>17</h3>
								</div>
								<div className="name-exec">
									<span>Exercicios de Vectores</span>
								</div>
								<div>
									<div className="classification">
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
									</div>
								</div>
							</div>
						</div>
					</SessionExercise>

					<SessionExercise>
						<h2>Programação Back-end</h2>
						<div className="roll">
							<span><FiChevronLeft /></span>
							<span><FiChevronRight /></span>
						</div>
						<div className="session-card">
							<div className="exercise">
								<div className="card-exec">
									<span><FaCuttlefish /></span>
									<h3>28</h3>
								</div>
								<div className="name-exec">
									<span>Exercícios de queda livre</span>
								</div>
								<div>
									<div className="classification">
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
									</div>
								</div>
							</div>
							<div className="exercise">
								<div className="card-exec">
									<span><FaJava /></span>
									<h3>288</h3>
								</div>
								<div className="name-exec">
									<span>Exercicios de Vectores</span>
								</div>
								<div>
									<div className="classification">
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
										<span><FaStar></FaStar></span>
									</div>
								</div>
							</div>
						</div>
					</SessionExercise>


					{/************************************Insernt data*********************** */}
					{
						clearForm ? (
							<Modal setClearForm={setClearForm}>
								<ContentAddExercise>
									<section id="section-home">
										<div className="header-questions">
											<h2>Faça aqui a questão para debateres com o pessoal</h2>
											<div className="form-questions">
												<form onSubmit={onSubmit}>
													<label htmlFor="" className="sr-only">
														Selecione o questão
													</label>
													<select onChange={(e) => setForm({ ...form, category: e.target.value })}>
														<option>Questão Relacionada com?</option>
														<option value="Matemática">Matemática</option>
														<option value="Física">Física</option>
														<option value="Programação">Programação</option>
														<option value="Lingua Portuguesa">Lingua Portuguesa</option>
														<option value="Inglês">Inglês</option>
														<option value="Francês">Francês</option>
														<option value="Direito">Direito</option>
														<option value="Economia">Economia</option>
														<option value="Outros sabres">Outros sabres</option>
													</select>

													<div className="input">
														<Input type="text" name="title" placeholder="Ensira aqui o titulo do arquivo" onChange={(e) => setForm({ ...form, title: e.target.value })} />
													</div>

													<label htmlFor="" className="sr-only">
														O que é a questão número 1
													</label>
													<textarea placeholder="Digite aqui a questão do grupo em questão" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
													<label htmlFor="" className="sr-only">
														Selecione o questão
													</label>
													<select onChange={(e) => setForm({ ...form, especially_for: e.target.value })}>
														<option>Especialmente para?</option>
														<option value="1º ano">1º ano</option>
														<option value="2º ano">2º ano</option>
														<option value="3º ano">3º ano</option>
														<option value="4º ano">4º ano</option>
														<option value="5º ano">5º ano</option>
														<option value="5º ano">6º ano</option>

													</select>
													<div className="input">
														{fileToSend ? <span className="send-file"> <FaFilePdf color="#555" size={30} /> <span>{fileToSend?.name}</span></span>:"" 
														}
													</div>
													<div className="exercise-footer">
														<div>
															<label
																id="foto"
															>

																<>
																	<InputSelect type="file"
																		name="cover"
																		onChange={uploadImage}
																	/>
																	<span><FiUpload /></span>
																</>

															</label>

														</div>
														<div>
															<span><FaYoutube /></span>
														</div>
														<div>
															<span><FiLink2 /></span>
														</div>
													</div>
													<footer>
														<div className="btn-question">
															<span>...</span>
															<Button>Atribuir o desafio</Button>
														</div>
													</footer>
												</form>
											</div>

										</div>
									</section>
								</ContentAddExercise>
							</Modal>
						) :
							""
					}





				</Wrapper>
			</Container>
		</MainContent >
	);
};

export default Exercises;
