import StudentModel from '../../model/student.model';
import TableContainer from '../common/TableContainer';

interface StudentsProps {
    students: StudentModel[]
}

const Students: React.FunctionComponent<StudentsProps> = ({ students }: StudentsProps) => {

    return (
        <TableContainer
            elements={students}
            header={
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                </tr>
            }
            body={students.map((student) => (
                <tr key={student.id} >
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                </tr>
            ))}
        />
    )
}

export default Students;