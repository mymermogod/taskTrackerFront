import React, { useEffect, useState } from 'react';
import { api } from '../../services/apiServices';
import { FaCircle, FaEdit, FaSearch, FaTrash } from 'react-icons/fa';
import { Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, ListRow, ListColumn, TaskCard, TaskTitle, TaskActions, SearchInput, CheckboxInput, SearchGrid, ConcludedGrid, ListColumn2 } from './HeroStyles';
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';



const Hero = () => {
let history = useHistory();

const {data, isFetching } = useFetch('tasks');
const [filter, setFilter] = useState([]);
const [showOnlyConcluded, setShowOnlyConcluded] = useState(false);
const [showInput, setShowInput] = useState(true)

useEffect(()=>{
	setFilter(data)
	console.log(showOnlyConcluded)
	if(showOnlyConcluded){
		setFilter(data.filter((item) =>
		item.status === "Done"))
	}
}, [data, showOnlyConcluded])


const filterBank = (value) => {
	if(!value){
		setFilter(data)
	}else{
		setFilter(
			data.filter((item) =>
				item.title.toLowerCase().includes(value.toLowerCase()))
		  );
	};
}



	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Best way to track your Tasks!</MainHeading>
				{isFetching && <p>Carregando...</p>}
				
					<ListRow >
					<ListColumn>
						{showInput? 
						(
						<SearchGrid>
						<SearchInput
						placeholder='Search...'
						onChange={(e) => {
							filterBank(e.target.value);
						  }}/>
						<FaSearch style={{marginTop: '12px'}}/>
						</SearchGrid>
						) : (
							<SearchGrid>
						<SearchInput
						placeholder='Search...'
						disabled
						onChange={(e) => {
							filterBank(e.target.value);
						  }}/>
						<FaSearch style={{marginTop: '12px'}}/>
						</SearchGrid>
						)}
						
						
						<ConcludedGrid style={{display:'flex', paddingTop:'5px'}}>
						<CheckboxInput 
						type='checkbox'
						check={showOnlyConcluded}
						onChange={()=>{
							if(showOnlyConcluded){
								setShowOnlyConcluded(false)
								setShowInput(true)
							}
							if(!showOnlyConcluded){
								setShowOnlyConcluded(true)
								setShowInput(false)
							}
						}}/>show only concluded
						</ConcludedGrid>
					<ListColumn2>	
						{filter&&
						filter?.map(task => {
						return (
						<TaskCard key={task.id}>
							<TaskTitle>
								<strong style={{paddingRight:'1em'}}>{task.title}</strong>
							</TaskTitle>
							<TaskActions>
								{task.status === 'Waiting' ? <FaCircle color='#ffd11a' style={{marginRight:'8px'}} /> 
								: 
								 task.status === 'Doing' ? <FaCircle color='#005ce6' style={{marginRight:'8px'}}/>
								:
								 task.status === 'Done'  ? <FaCircle color='#66cc00' style={{marginRight:'8px'}}/>
								:
								 <FaCircle color='#cc2900' style={{marginRight:'8px'}}/> }
								<FaEdit size='1.2em' style={{marginRight:'6px'}}
								onClick={() => {
									localStorage.setItem('id',task.id)
									history.push('/editForm')
								}}/>
								<FaTrash onClick={()=> {
									api.delete(`task/${task.id}`);
									document.location.reload(true);
								}} size='1.2em'/>
							</TaskActions>
						</TaskCard>
						)
				})}	
					</ListColumn2>
					</ListColumn>
				</ListRow>

			
				
			</Container>

		</HeroSection>
	);
};

export default Hero;
