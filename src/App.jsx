import { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { ListadoPaciente } from './components/ListadoPaciente';

function App() {
	const initial = JSON.parse(localStorage.getItem('pacientes')) ?? [];
	//Sí no hay nada en LStorage, agregalé un arreglo vacío para no tener un null.
	//Sí recargamos detecta que hay algo en storage y lo guaramos en el state.
	const [pacientes, setPacientes] = useState(initial);
	//Al parecer en las ultimas versiones de REACT ya no es necesario crear un useEffect para...
	//obtener el valor del localStorage. Sino que defrente ponerlo en el useState.

	const [paciente, setPaciente] = useState({});

	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify(pacientes));
		//cada vez que se ejecute un cambio en pacientes se va ejecutar.
	}, [pacientes]);

	const eliminarPaciente = (id) => {
		const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
		setPacientes(pacientesActualizados);
	};

	return (
		<div className="container mx-auto mt-10">
			<Header />
			<div className="mt-12 md:flex">
				<Formulario
					setPacientes={setPacientes}
					pacientes={pacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPaciente
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}

export default App;

//los hook no pueden ir dentro de condicionales
//los hook no puedes ir despues de un return
