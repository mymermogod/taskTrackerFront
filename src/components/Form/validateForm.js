export default function validateForm({ title, status }) {
	if (!title.trim()) {
		return 'Task Title is required';
	}
	if (!status.trim()) {
		return 'Status is required';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	
}
