<template>
    <main class="flex flex-col w-5/6">

        <!-- Begin top bar section -->
        <top-nav></top-nav>
        <!-- End top bar section -->

        <!-- Begin project tittle -->
        <div class="flex justify-between p-4 border-b bg-white">

            <!-- Begin title -->
            <div class="">
                <h2 class="font-bold text-sm text-gray-400 uppercase">
                    {{ project.project.name }}
                </h2>
            </div>
            <!-- End title -->

            <!-- Begin breadcrumb -->
            <div class="text-xs text-gray-400 uppercase">
                Projects | {{ project.project.name }}
            </div>
            <!-- End breadcrumb -->

        </div>
        <!-- End project tittle -->

        <!-- Begin contents -->
        <div class="p-4">
            <div class="flex gap-7 overflow-hidden overflow-scroll hide-scroll-bar">

                <!-- Begin tasks -->
                <div v-for="(status, index) in statuses.statuses" :key="status.attributes.resource_id" class="flex flex-col">

                    <!-- Begin status -->
                    <div class="w-72 sticky top-0 z-20 overflow-hidden rounded shadow bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out mb-8">
                        <div class="flex justify-between items-center ">
                            <div class="uppercase text-xs text-gray-500 p-3 border-t-4 border-t-red-600">
                                {{ status.attributes.name }}
                            </div>

                            <button @click="toggleAddTaskModal(); setStatusID( status.attributes.id, index )" class="text-gray-500 text-xxs uppercase mr-2 flex items-center justify-center rounded cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!-- End status -->

                    <!-- Begin tasks section -->
                    <div class="w-72 h-screen hide-scroll-bar">
                        <div v-for="(task, key) in status.include.tasks" :key="task.attributes.resource_id" draggable="true" @dragstart="dragItem( $event, task )" class="bg-white mb-3 rounded border border-gray-100 p-4 cursor-move">

                            <!-- Begin task name / status -->
                            <div class="flex items-center justify-between mb-2 text-sm">

                                <!-- Begin name -->
                                <div class="text-gray-400">{{ task.attributes.name }}</div>
                                <!-- End name -->

                                <!-- Begin action drop menu -->
                                <div class="flex flex-col justify-center bg-gray-400" draggable="false">
                                    <div class="flex items-center justify-center">
                                        <div class="bg-white relative inline-block text-left dropdown">

                                            <!-- Begin icon button -->
                                            <span class="rounded-md shadow-sm">
                                                <button class="inline-flex justify-center w-full px-1.5 py-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 active:bg-gray-50 active:text-gray-800" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="popover__title w-4 h-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                </button>
                                            </span>
                                            <!-- End icon button -->

                                            <!-- Begin drop menu -->
                                            <div class="invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                                <div class="absolute z-50 left-10 w-56 -top-6 left-8 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                                    <div v-for="(project_status, index) in project_statuses.project_statuses" :key="project_status.attributes.resource_id" class="py-1 uppercase text-xs cursor-pointer">
                                                        <p v-if="compareStatus(status.attributes.id, project_status.attributes.id)" tabindex="2" class="px-4 py-3 text-gray-700 font-bold flex justify-between w-full px-4 py-1 leading-5 text-left cursor-pointer" role="menuitem" >{{ project_status.attributes.name }}</p>
                                                        <p v-else @click="updateStatus( index, project_status.attributes.id, key, task.attributes.resource_id )" tabindex="2" class="text-gray-700 flex justify-between w-full px-4 py-1 leading-5 text-left cursor-pointer" role="menuitem" >{{ project_status.attributes.name }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End drop menu -->

                                        </div>
                                    </div>
                                </div>
                                <!-- End action drop menu -->

                            </div>
                            <!-- End task name / status -->

                            <!-- Begin assigned -->
                            <div class="">
                                <p class="mt-1 text-xs font-medium text-gray-600 mt-3">
                                    <span class="px-1.5 py-1 text-xs text-white bg-red-400 rounded-full mr-1.5">{{ task.attributes.assigned_to.substring(0,1) }}</span>
                                    <span>{{ task.attributes.assigned_to }}</span>
                                </p>
                            </div>
                            <!-- End assigned -->

                            <!-- Begin start / due dates -->
                            <div class="mt-4 mb-3 sm:pr-8">
                                <p class="flex text-xs text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="" stroke="currentColor" :class="`w-4 h-4 mr-2 fill-${task.attributes.priority_tag}-600 text-${task.attributes.priority_tag}-600`"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" /></svg>
                                    <span class="text-gray-500">{{ task.attributes.start_date }}</span>
                                    <span class="mx-1">-</span>
                                    <span class="text-red-500">{{ task.attributes.due_date }}</span>
                                </p>
                            </div>
                            <!-- End start / due dates -->

                            <!-- Begin tags -->
                            <div class="">
                                <div class="text-xxs mr-1 mb-1 inline-flex items-center leading-sm px-3 py-1 rounded-r-full bg-red-500 text-white">API</div>
                                <div class="text-xxs mr-1 mb-1 inline-flex items-center leading-sm px-3 py-1 rounded-r-full bg-yellow-500 text-white">Product</div>
                                <div class="text-xxs mr-1 mb-1 inline-flex items-center leading-sm px-3 py-1 rounded-r-full bg-green-500 text-white">Brand</div>
                                <div class="text-xxs mr-1 mb-1 inline-flex items-center leading-sm px-3 py-1 rounded-r-full bg-blue-500 text-white">Ruled</div>
                            </div>
                            <!-- End tags -->

                            <!-- Begin action drop menu -->
                            <div x-data="{ open: false }" class="relative border-t mt-3">
                                <button x-on:click="open = true" @click="setStatusID( status.attributes.id, index )" class="flex mt-1 -ml-1 bg-white text-gray-700" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </button>

                                <div x-show="open" x-on:click.away="open = false" class="mt-1 cursor-pointer bg-white text-gray-700 z-50 w-full">
                                    <ul class="w-full dropMenu text-gray-400 text-xs">
                                        <li @click="toggleEditTaskModal(); setEditedTaskValues(task, key)" class="flex items-center p-2 rounded hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>

                                            <p>Edit</p>
                                        </li>
                                        <li @click="deleteTask( task.attributes.resource_id, key )" class="flex items-center p-2 rounded hover:bg-gray-100 text-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            <p>Delete</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End action drop menu -->

                        </div>
                    </div>
                    <!-- Begin tasks section -->

                </div>
                <!-- End tasks -->

                <!-- Begin add status -->
                <div class="group w-72 h-10">
                    <div class="flex w-72 bg-gray-200 rounded p-3 opacity-70 hover:opacity-100 text-center">
                        <button @click="toggleAddStatusModal()" class="flex items-center justify-center text-xs w-full uppercase mr-2 rounded cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Add Status
                        </button>
                    </div>
                </div>
                <!-- End add status -->

            </div>
        </div>
        <!-- End contents -->

        <!-- Begin modals -->
        <div class="">

            <!-- Begin add status modal -->
            <div class="animated fadeIn faster">
                <div v-if="modal.showAddStatusModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center flex animated fadeIn faster">
                    <div class="relative mx-auto w-96">
                        <div class="rounded relative flex flex-col w-full bg-white">

                            <!-- Begin modal header -->
                            <div class="flex justify-center justify-between items-center p-4">
                                <h2 class="text-gray-500 text-xs font-bold uppercase">ADD NEW STATUS</h2>

                                <button class="" v-on:click="toggleAddStatusModal()">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <!-- End modal header -->

                            <!-- Begin modal body -->
                            <div class="relative px-4 py-3 flex-auto border-t">
                                <div class="flex flex-col text-sm">
                                    <input v-model="status.name" class="border border-gray-300 rounded px-2.5 py-1.5 focus:outline-0 w-full text-gray-500 mb-4" type="text" placeholder="Enter the status name"/>
                                    <textarea v-model="status.description" class="border border-gray-300 rounded px-2.5 py-1.5 focus:outline-0 w-full text-gray-500 mb-4" placeholder="Enter the status description"></textarea>
                                </div>
                            </div>
                            <!-- End modal body -->

                            <!-- Begin action buttons -->
                            <div class="flex m-4 justify-end">
                                <button v-on:click="toggleAddStatusModal(); addStatus()" class="inline-flex justify-center rounded px-5 py-1 bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white">SAVE</button>
                            </div>
                            <!-- End action buttons -->

                        </div>
                    </div>
                </div>
                <div v-if="modal.showAddStatusModal" class="opacity-10 fixed inset-0 z-40 bg-black"></div>
            </div>
            <!-- End add status modal -->

            <!-- Begin add task modal -->
            <div class="animated fadeIn faster">
                <div v-if="modal.showAddTaskModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center flex animated fadeIn faster">
                    <div class="relative mx-auto w-96">
                        <div class="rounded relative flex flex-col w-full bg-white">

                            <!-- Begin modal header -->
                            <div class="flex justify-center justify-between items-center p-4">
                                <h2 class="text-gray-500 text-xs font-bold uppercase">ADD NEW TASK</h2>

                                <button class="" v-on:click="toggleAddTaskModal()">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <!-- End modal header -->

                            <!-- Begin modal body -->
                            <div class="relative px-4 py-3 flex-auto border-t w-full">
                                <div class="flex flex-col text-sm w-full">
                                    <input v-model="task.name" class="border border-gray-300 rounded px-2.5 py-1.5 focus:outline-0 w-full text-gray-500 mb-4" type="text" placeholder="Enter the task name"/>
                                    <date-picker v-model:value="task.date_range" value-type="format" format="YYYY-MM-DD" type="date" range placeholder="Select date range" class="text-gray-500 w-full"></date-picker>
                                </div>
                            </div>
                            <!-- End modal body -->

                            <!-- Begin action buttons -->
                            <div class="flex m-4 justify-end">
                                <button v-on:click="toggleAddTaskModal(); addTask()" class="inline-flex justify-center rounded px-5 py-1 bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white">SAVE</button>
                            </div>
                            <!-- End action buttons -->

                        </div>
                    </div>
                </div>
                <div v-if="modal.showAddTaskModal" class="opacity-10 fixed inset-0 z-40 bg-black"></div>
            </div>
            <!-- End add task modal -->

            <!-- Begin edit task modal -->
            <div class="animated fadeIn faster">
                <div v-if="modal.showEditTaskModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center flex animated fadeIn faster">
                    <div class="relative mx-auto w-96">
                        <div class="rounded relative flex flex-col w-full bg-white">

                            <!-- Begin modal header -->
                            <div class="flex justify-center justify-between items-center p-4">
                                <h2 class="text-gray-500 text-xs font-bold uppercase">EDIT TASK</h2>

                                <button class="" v-on:click="toggleEditTaskModal()">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <!-- End modal header -->

                            <!-- Begin modal body -->
                            <div class="relative px-4 py-3 flex-auto border-t">
                                <div class="flex flex-col text-sm">
                                    <input v-model="task.name" class="border border-gray-300 rounded px-2.5 py-1.5 focus:outline-0 w-full text-gray-500 mb-4" type="text" placeholder="Enter the task name"/>

                                    <div class="flex justify-between gap-5">
                                        <date-picker v-model:value="task.start_date" value-type="format" format="YYYY-MM-DD" type="date" :placeholder="task.start_date" class="text-gray-500 w-full"></date-picker>
                                        <date-picker v-model:value="task.due_date" value-type="format" format="YYYY-MM-DD" type="date" :placeholder="task.due_date" class="text-gray-500 w-full"></date-picker>
                                    </div>
                                </div>
                            </div>
                            <!-- End modal body -->

                            <!-- Begin action buttons -->
                            <div class="flex m-4 justify-end">
                                <button v-on:click="toggleEditTaskModal(); editTask()" class="inline-flex justify-center rounded px-5 py-1 bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white">SAVE</button>
                            </div>
                            <!-- End action buttons -->

                        </div>
                    </div>
                </div>
                <div v-if="modal.showEditTaskModal" class="opacity-10 fixed inset-0 z-40 bg-black"></div>
            </div>
            <!-- End edit task modal -->

        </div>
        <!-- End modals -->

    </main>
</template>

<script>
    import TopNav from "@/components/shared/TopNav";

    import DatePicker from 'vue-datepicker-next';
    import 'vue-datepicker-next/index.css';

    import axios from 'axios';
    import {onBeforeMount, reactive} from "vue";

    import {useRoute} from 'vue-router'

    export default
    {
        name: "MainContents",
        components: {TopNav, DatePicker},

        setup()
        {
            const route = useRoute()
            const modal = reactive({ showAddStatusModal: false, showAddTaskModal: false, showEditTaskModal: false, message: "" })

            const project = reactive({ project: [] })
            const project_statuses = reactive({ project_statuses: [] })
            const statuses = reactive({ statuses: [] })
            const status = reactive({ name: "", description: "" })
            const task = reactive({ name: "", date_range: [], priority_id: 1, status_id: null, user_id: 1, index: null, start_date: "", due_date: "", resource_id: "", key: null, taskObj: [] })

            const addStatus = () =>
            {
                axios({ method: 'POST', url: 'statuses?include=tasks', data: { name: status.name, description: status.description, project_id: project.project.id }})
                    .then( response =>
                    {
                        if ( response.data.code === 201 )
                        {
                            statuses.statuses.push( response.data.data )
                            status.name = ""; status.description = "";
                            getProjectStatuses()
                        }
                    })
            }

            const addTask = () =>
            {
                axios({ method: 'POST', url: 'tasks', data: { name: task.name, start_date: task.date_range[0], due_date: task.date_range[1], priority_id: task.priority_id, status_id: task.status_id, user_id: task.user_id }})
                    .then( response =>
                    {
                        if ( response.data.code === 201 )
                        {
                            statuses.statuses[task.index]['include']['tasks'].push( response.data.data )
                            task.name = ""; task.date_range = []; task.status_id = null; task.index = null
                        }
                    })
            }

            const editTask = ( key ) =>
            {
                try
                {
                    axios({ method: 'PUT', url: 'tasks/' + task.resource_id, headers:{"Content-Type" : "application/json"}, data: { name: task.name, start_date: task.start_date, due_date: task.due_date }})
                        .then( response =>
                        {
                            if ( response.data.code === 200 )
                            {
                                statuses.statuses[task.index]['include']['tasks'][task.key]['attributes']['name'] = response.data.data.attributes.name
                                statuses.statuses[task.index]['include']['tasks'][task.key]['attributes']['start_date'] = response.data.data.attributes.start_date
                                statuses.statuses[task.index]['include']['tasks'][task.key]['attributes']['due_date'] = response.data.data.attributes.due_date
                            }
                        })
                }
                catch (error)
                {
                    console.error(error.response.data);
                }
            }

            const updateStatus = ( status_index, status_id, task_index, task_resource_id ) =>
            {
                console.log(status_index)
                console.log(task_index)

                try
                {
                    axios({ method: 'PUT', url: 'tasks/' + task_resource_id + '/status/update', headers: { "Content-Type" : "application/json" }, data: { status_id: status_id }})
                        .then( response =>
                        {
                            if ( response.data.code === 200 )
                            {
                                getStatuses()
                            }
                        })
                }
                catch (error)
                {
                }
            }

            const deleteTask = ( resource_id, key ) =>
            {
                axios({ method: 'DELETE', url: 'tasks/' + resource_id})
                    .then( response => { if ( response.data.code === 204 ){ statuses.statuses[task.index]['include']['tasks'].splice(key) }})
            }

            const getStatuses = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'projects/' + route.params.project + '?include=statuses.tasks', headers: {} })
                    project.project = response.data.data.attributes
                    statuses.statuses = response.data.data.include.statuses
                }
                catch( err )
                {
                    console.log( err )
                }
            }

            const getProjectStatuses = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'projects/' + route.params.project + '?include=statuses', headers: {} })
                    project_statuses.project_statuses = response.data.data.include.statuses
                }
                catch( err )
                {
                    console.log( err )
                }
            }

            onBeforeMount(async () =>
            {
                await getStatuses()
                await getProjectStatuses()
            })

            const compareStatus = ( main, com ) =>
            {
                return main === com;
            }

            const toggleAddTaskModal = () =>
            {
                modal.showAddTaskModal = !modal.showAddTaskModal;
            }

            const toggleEditTaskModal = () =>
            {
                modal.showEditTaskModal = !modal.showEditTaskModal;
            }

            const toggleAddStatusModal = () =>
            {
                modal.showAddStatusModal = !modal.showAddStatusModal;
            }

            const setStatusID = ( value, index ) =>
            {
                task.status_id = value
                task.index = index
            }

            const setEditedTaskValues = ( taskObj, key ) =>
            {
                task.resource_id = taskObj['attributes']['resource_id']
                task.key = key
                task.name = taskObj['attributes']['name']
                task.start_date = taskObj['attributes']['start_date']
                task.due_date = taskObj['attributes']['due_date']
            }

            const dragItem = ( event, item) =>
            {
                console.log(item)
                // event.dataTransfer.dropEffect = "move"
                // event.dataTransfer.effectAllowed = "move"
                // event.dataTransfer.dataTransfer.setData('item_id', item)
            }

            const dropItem = ( event, item ) =>
            {}

            return { project, statuses, modal, project_statuses, compareStatus, dragItem, dropItem, addStatus, addTask, editTask, deleteTask, toggleAddStatusModal, toggleAddTaskModal, toggleEditTaskModal, status, task, setEditedTaskValues, updateStatus, setStatusID }
        }
    }
</script>

<style scoped>
    .hide-scroll-bar
    {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .hide-scroll-bar::-webkit-scrollbar
    {
        display: none;
    }

    .dropMenu.li>ul                 { transform: translatex(100%) scale(0) }
    .dropMenu.li:hover>ul           { transform: translatex(101%) scale(1) }
    .dropMenu.li > button svg       { transform: rotate(-90deg) }
    .dropMenu.li:hover > button svg { transform: rotate(-270deg) }
    .group:hover .group-hover\:scale-100 { transform: scale(1) }
    .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
    .scale-0 { transform: scale(0) }

    .dropdown:focus-within .dropdown-menu
    {
        opacity:1;
        transform: translate(0) scale(1);
        visibility: visible;
    }
</style>