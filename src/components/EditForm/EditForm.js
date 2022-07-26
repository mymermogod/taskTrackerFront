import React, { useEffect, useState } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
	FormSelect,
} from './EditFormStyles';
import { Container } from '../../globalStyles';
import validateForm from './validateForm';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/apiServices';
import { useParams } from 'react-router-dom';

const EditForm = () => {
	let history = useHistory();
	const [title, setTitle] = useState('');
	const [status, setStatus] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
    const [task, setTask] =useState('')

    async function getTask(){
        let getId = localStorage.getItem('id');
        const resp = await api.get(`task/${getId}`);
        console.log(resp)
        setTask(resp.data);
        setTitle(resp.data.title)
        setStatus(resp.data.status)
    }

    useEffect(()=> {   
        getTask();
    }, [])

	const handleTask = async (e) => {
		e.preventDefault();
        let getId = localStorage.getItem('id');
			try {
				const editTask = await api.put(`task/${getId}`, {
					title: title,
					status: status
				} );
				console.log(editTask.data);
				setSuccess('Application was submitted!');
				history.push('');
			}catch(error) {
				console.log(error)
			}

	}

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};


	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Edit Task</FormTitle>
						<FormWrapper onSubmit={handleTask}>	
								<FormInputRow>
									<FormLabel>Task Title</FormLabel>
									<FormInput
										type='text'
										placeholder='Enter your Task Title'
										value={title}
										onChange={ (e) => setTitle(e.target.value)}
									/>
								</FormInputRow>
								<FormInputRow>
									<FormLabel>Task Status</FormLabel>
									<FormSelect
										type='text'
										placeholder='Enter your Task Title'
										value={status}
										onChange={ (e) => setStatus(e.target.value)}
									>
										<option >Select a Task Status...</option>
										<option value='Waiting'>Waiting</option>
										<option value='Doing'>Doing</option>
										<option value='Done'>Done</option>
										<option value='Canceled'>Canceled</option>
									</FormSelect>
								</FormInputRow>
							<FormButton type="submit">Edit</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default EditForm;
