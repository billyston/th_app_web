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
                    Home
                </h2>
            </div>
            <!-- End title -->

            <!-- Begin breadcrumb -->
            <div class="text-xs font-bold text-gray-400 uppercase">
            </div>
            <!-- End breadcrumb -->

        </div>
        <!-- End project tittle -->

        <!-- Begin contents -->
        <div class="p-4">
            <div class="flex gap-7 overflow-hidden overflow-scroll hide-scroll-bar">
                <div v-for="(status, index) in statuses.statuses" :key="status.attributes.resource_id" class="flex flex-col">

                    <!-- Begin tasks section -->
                    <div class="w-72 h-screen overflow-hidden overflow-scroll hide-scroll-bar">
                        <div v-for="(task, key) in status.include.tasks" :key="task.attributes.resource_id" draggable="true" class="bg-white mb-3 rounded border border-gray-100 p-4 cursor-move">

                            <!-- Begin project title -->
                            <div class="flex border-b border-gray-200 pb-3 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                </svg>

                                <p class="text-xs text-gray-400">{{ task.attributes.project }}</p>
                            </div>
                            <!-- End project title -->

                            <!-- Begin task name / assigned -->
                            <div class="justify-between pb-3 mb-3">
                                <p class="text-xs text-gray-400">{{ task.attributes.name }}</p>
                                <p class="mt-1 text-xs font-medium text-gray-600 mt-3">
                                    <span class="px-1.5 py-1 text-xs text-white bg-red-400 rounded-full mr-1.5">{{ task.attributes.assigned_to.substring(0,1) }}</span>
                                    <span>{{ task.attributes.assigned_to }}</span>
                                </p>
                            </div>
                            <!-- End task name / assigned -->

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
                            <div class="relative px-4 py-3 flex-auto border-t">
                                <div class="flex flex-col text-sm">
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

    export default
    {
        name: "MainContents",
        components: {TopNav, DatePicker},

        setup()
        {
            const modal = reactive({ showAddStatusModal: false, showAddTaskModal: false, showEditTaskModal: false, message: "" })

            const statuses = reactive({ statuses: [] })
            const status = reactive({ name: "", description: "", project_id: 1 })
            const task = reactive({ name: "", date_range: [], priority_id: 1, status_id: null, user_id: 1, index: null, start_date: "", due_date: "", resource_id: "", key: null, taskObj: [] })

            const addStatus = () =>
            {
                axios({ method: 'POST', url: 'statuses?include=tasks', data: { name: status.name, description: status.description, project_id: status.project_id }})
                    .then( response =>
                    {
                        if ( response.data.code === 201 )
                        {
                            statuses.statuses.push( response.data.data )
                            status.name = ""; status.description = "";
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

            const deleteTask = ( resource_id, key ) =>
            {
                axios({ method: 'DELETE', url: 'tasks/' + resource_id})
                    .then( response => { if ( response.data.code === 204 ){ statuses.statuses[task.index]['include']['tasks'].splice(key) }})
            }

            const getStatuses = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'statuses?include=tasks', headers: {} })
                    statuses.statuses = response.data.data
                }
                catch( err )
                {
                    console.log( err )
                }
            }

            onBeforeMount(async () =>
            {
                await getStatuses()
            })

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

            const setProjectID = ( value ) =>
            {
                status.project_id = value
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

            return { statuses, modal, addStatus, addTask, editTask, deleteTask, toggleAddStatusModal, toggleAddTaskModal, toggleEditTaskModal, status, task, setEditedTaskValues, setStatusID, setProjectID }
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
</style>