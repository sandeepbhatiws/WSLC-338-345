import React, { useRef, useState } from 'react'

export default function RightSide() {

    const [isModalOpen, setModal] = useState(false);
    const [allTasks, setAllTasks] = useState([]);

    var taskTitle       = useRef();
    var taskDescription = useRef();

    const [input , setInput] = useState({
        title : '',
        description : '',
        reward_type : '',
        id : '',
    });

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
        setInput({
            title : '',
            description : '',
            reward_type : '',
            id : '',
        })
    }

    const addNewTask = (event) => {
        event.preventDefault();


        console.log(input.id);

        if(input.id === ''){
            const task = {
                title : taskTitle.current.value,
                description : taskDescription.current.value,
                reward_type : event.target.reward_type.value,
            }
    
            const final = [task, ...allTasks];
            setAllTasks(final);
    
            setModal(false);
    
            setInput({
                title : '',
                description : '',
                reward_type : '',
                id : '',
            })
    
            // event.target.title.value = '';
            event.target.reset();
        } else {
            const data = allTasks.map((v,i) => {
                if(i == input.id){
                    v.title = taskTitle.current.value;
                    v.description = taskDescription.current.value;
                    v.reward_type = event.target.reward_type.value;

                    return v;
                } else {
                    return v;
                }
            });

            const final = [...data];
            setAllTasks(final);
    
            setModal(false);
    
            setInput({
                title : '',
                description : '',
                reward_type : '',
                id : '',
            })
    
            // event.target.title.value = '';
            event.target.reset();
        }

        
    }

    const deleteTask = (index) => {
        if(confirm('Are you sure you want to delete ?')){
            allTasks.splice(index,1);
            console.log(allTasks);
            const final = [...allTasks];
            setAllTasks(final);
        }
    }

    const editTask = (index) => {
        setModal(true);

        var task = allTasks.filter((v,i) => {
            if(i == index){
                return v;
            }
        })

        setInput({
            title : task[0].title,
            description : task[0].description,
            reward_type : task[0].reward_type,
            id : index,
        })
    }

    const changeInput = (event) => {
        var data = {...input};
        data[event.target.name] = event.target.value;
        setInput(data);
    }

  return (
    <>
        <div class="md:col-span-2">
            <div class="bg-[#111] rounded-xl p-4 lg:p-6 shadow-lg border border-purple-500/20">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold">Active ToDo</h2>
                    <button onClick={ openModal } class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300 transform hover:scale-105">
                        <i class="fas fa-plus mr-2"></i> New ToDo
                    </button>
                </div>

                <div id="taskList" class="space-y-4 h-[480px] max-h-full overflow-y-auto pr-2">

                    {
                        allTasks.map((v,i) => {
                            return(
                                <div class="task-item bg-zinc-900 hover:shadow-md hover:bg-zinc-800 rounded-lg p-4  transform transition-all duration-300">
                                    <div class="flex flex-col lg:flex-row md:flex-row justify-between items-start">
                                        <div>
                                            <h3 class="font-bold "> { v.title } </h3>
                                            <p class="text-sm text-gray-400">{ v.description }</p>
                                        </div>
                                        <div class="flex mt-1 lg:m-0 md:m-0 items-center space-x-2">
                                            <span class="px-2 py-1 bg-purple-500/20 rounded-lg text-sm">
                                            { v.reward_type } +10
                                            </span>
                                            
                                                <button onClick={ () => editTask(i) } class="px-2 py-1 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-colors duration-300">
                                                    <i class="fas fa-pencil"></i>
                                                </button>
                                            
                                            <button onClick={ () => deleteTask(i) } class="px-2 py-1 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-colors duration-300">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>

        {/* <!-- Custom Modal --> */}
        <div id="newTaskModal" class={ isModalOpen ? 'modal active' : 'modal' }>
            <div class="modal-content bg-zinc-800">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold">New Task</h3>
                    <button onClick={ closeModal } class="text-gray-400 hover:text-white transition-colors">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <form id="newTaskForm" onSubmit={ addNewTask }>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-2">Task Title</label>
                        <input type="text" value={input.title} name='title' id="taskTitle" required class="w-full bg-zinc-700 rounded-lg p-2 text-white border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300" onChange={ changeInput } ref={taskTitle} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium mb-2">Description</label>
                        <textarea name='description' ref={taskDescription} value={input.description} id="taskDescription" rows="3" class="w-full bg-zinc-700 rounded-lg p-2 text-white border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300" onChange={ changeInput }></textarea>
                    </div>
                    <div class="mb-6">
                        <label class="block text-sm font-medium mb-2">Reward Type</label>
                        <select name='reward_type' id="taskRewardType" class="w-full bg-zinc-700 rounded-lg p-2 text-white border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300">
                            <option value="strength">Strength</option>
                            <option value="intelligence">Intelligence</option>
                            <option value="charisma">Charisma</option>
                            <option value="creativity">Creativity</option>
                        </select>
                    </div>
                    <div class="flex justify-end space-x-4">
                        <button type="button" onClick={ closeModal } class="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                            Cancel
                        </button>
                        <button type="submit" class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                            
                            { 
                                (input.id === '') ? 'Create Task' : 'Update TasK'
                            }
                            
                        </button>
                    </div>
                </form>
            </div>
        </div>
        {/* <!-- partial --> */}
    </>
  )
}
