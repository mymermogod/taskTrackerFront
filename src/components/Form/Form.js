import React, { useState } from 'react';
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
} from './FormStyles';
import { Container } from '../../globalStyles';
import validateForm from './validateForm';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/apiServices';

const Form = () => {
	let history = useHistory();
	const [title, setTitle] = useState('');
	const [status, setStatus] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);


	const createTask = async (e) => {
		e.preventDefault();
			try {
				const newTask = await api.post('task', {
					title: title,
					status: status
				} );
				console.log(newTask.data);
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
						<FormTitle>Add Task</FormTitle>
						<FormWrapper onSubmit={createTask}>	
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
							<FormButton type="submit">Add</FormButton>
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

export default Form;
