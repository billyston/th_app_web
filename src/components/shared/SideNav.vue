<template>

    <!-- Begin contents -->
    <aside class="bg-white h-screen sticky top-0 z-30 w-1/6">
        <div class="m-0 p-0">

            <!-- Begin logo section -->
            <div class="flex items-center h-14 px-4 border-b">
                <svg width="30" height="30" viewBox="0 0 32 32">
                    <defs>
                        <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                            <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%"></stop>
                            <stop stop-color="#A5B4FC" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                            <stop stop-color="#38BDF8" stop-opacity="0" offset="0%"></stop>
                            <stop stop-color="#38BDF8" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <rect fill="#6366F1" width="32" height="32" rx="16"></rect>
                    <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5"></path>
                    <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)"></path>
                    <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)"></path>
                </svg>
                <h1 class="font-black ml-2.5 text-gray-500">Task<span class="text-gray-400">Hub</span></h1>
            </div>
            <!-- End logo section -->

            <!-- Begin menu section -->
            <div class="overflow-y-auto overflow-x-hidden flex-grow">
                <ul class="flex flex-col py-4 space-y-1">

                    <!-- Begin search bar -->
                    <li class="px-5">
                        <div class="flex flex-row items-center h-8">
                            <div class="text-sm font-light tracking-wide text-gray-500 w-full">
                                <form class="flex items-center">
                                    <label for="simple-search" class="sr-only">Search</label>
                                    <div class="relative w-full">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" class="border border-gray-200 bg-gray-100 text-gray-900 text-sm rounded block w-full pl-10 p-1 focus:outline-0" placeholder="Search" required>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </li>
                    <!-- End search bar -->

                    <!-- Begin home / dashboard menu -->
                    <li class="">
                        <router-link to="/" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Home</span>
                        </router-link>
                    </li>
                    <!-- End home / dashboard menu -->

                    <!-- Begin notification menu -->
                    <li class="mb-5">
                        <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Notifications</span>
                            <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">15</span>
                        </a>
                    </li>
                    <!-- End notification menu -->

                    <li class="mt-5 font-taskhub">
                        <div class="border-b text-sm">

                            <!-- Begin projects menu -->
                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2">
                                <div class="flex items-center py-3 px-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 mr-2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                    </svg>
                                    <label class="block leading-normal cursor-pointer" for="tab-single-one">Projects</label>
                                </div>
                                <div class="tab-content overflow-hidden leading-normal">

                                    <!-- Begin add project button -->
                                    <div @click="toggleAddProjectModal()" class="uppercase hover:bg-gray-100 cursor-pointer text-xs flex mx-5 my-4 p-1.5 m-auto items-center rounded-md bg-gray-200 justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Add Project</span>
                                    </div>
                                    <!-- End add project button -->

                                    <!-- Begin project list -->
                                    <div class="text-gray-500 text-xs mb-3">
                                      <div v-for="(project, index) in projects.projects" :key="project.attributes.resource_id" class="">
                                      <router-link :to="{ name: 'project', params: { project: project.attributes.resource_id } }" class="flex items-center cursor-pointer mx-5 my-1.5 m-auto">
                                            <span class="px-2 py-1 text-white bg-red-400 rounded mr-1.5">{{project.attributes.name.substring(0,1)}}</span>
                                            <span class="hover:bg-gray-100 w-full py-1 px-2 rounded">{{ project.attributes.name }}</span>
                                        </router-link>
                                      </div>
                                    </div>
                                    <!-- End project list -->

                                </div>
                            </div>
                            <!-- End projects menu -->

                            <div class="tab w-full overflow-hidden border-t">
                                <input class="absolute opacity-0" id="tab-two-one" type="radio" name="tabs2">
                                <div class="flex items-center py-3 px-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 mr-2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                    </svg>
                                  <label class="block leading-normal cursor-pointer" for="tab-two-one">Dashboards</label>
                                </div>
                                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="p-5">Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- End menu section -->

        </div>
    </aside>
    <!-- End contents -->

    <!-- Begin modals -->
    <div class="">

        <!-- Begin add status modal -->
        <div class="animated fadeIn faster">
            <div v-if="modal.showAddProjectModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center flex animated fadeIn faster">
                  <div class="relative mx-auto w-2/6">
                      <div class="rounded relative flex flex-col w-full bg-white">

                            <!-- Begin modal header -->
                            <div class="flex justify-center justify-between items-center p-4">
                                <h2 class="text-gray-500 text-xs font-bold uppercase">ADD NEW STATUS</h2>
                                <button class="" v-on:click="toggleAddProjectModal()">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <!-- End modal header -->

                            <!-- Begin modal body -->
                            <div class="relative px-4 py-3 flex-auto border-t">
                                <div class="flex flex-col text-sm">
                                    <input v-model="project.name" class="border border-gray-300 rounded px-2.5 py-1.5 focus:outline-0 w-full text-gray-500 mb-4" type="text" placeholder="Enter the status name"/>
                                    <textarea v-model="project.description" class="border border-gray-300 rounded px-2.5 py-1.5 focus:outline-0 w-full text-gray-500 mb-4" placeholder="Enter the status description"></textarea>
                                </div>
                            </div>
                            <!-- End modal body -->

                            <!-- Begin action buttons -->
                            <div class="flex m-4 justify-end">
                                <button v-on:click="toggleAddProjectModal(); addProject()" class="inline-flex justify-center rounded px-5 py-1 bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white">SAVE</button>
                            </div>
                            <!-- End action buttons -->

                      </div>
                  </div>
              </div>
          <div v-if="modal.showAddProjectModal" class="opacity-10 fixed inset-0 z-40 bg-black"></div>
        </div>
        <!-- End add status modal -->

    </div>
    <!-- End modals -->

</template>

<script>
  import {onBeforeMount, reactive} from "vue";
  import axios from "axios";

  export default
  {
      name: "SideNav",

      setup()
      {
          const modal = reactive({ showAddProjectModal: false })

          const projects = reactive({ projects: [] })
          const project = reactive({ name: "", description: "" })

          const addProject = () =>
          {
              axios({ method: 'POST', url: 'projects', data: { name: project.name, description: project.description }})
                  .then( response =>
                  {
                      if ( response.data.code === 201 )
                      {
                          projects.projects.push( response.data.data )
                          project.name = ""; project.description = "";
                      }
                  })
          }

          const getProjects = async () =>
          {
              try
              {
                  const response = await axios({ method: 'GET', url: 'projects', headers: {} })
                  projects.projects = response.data.data
              }
              catch( err )
              {
                  console.log( err )
              }
          }

          onBeforeMount(async () =>
          {
              await getProjects()
          })

          const toggleAddProjectModal = () =>
          {
              modal.showAddProjectModal = !modal.showAddProjectModal;
          }

          return { projects, project, modal, addProject, toggleAddProjectModal }
      }
  }
</script>

<style scoped>
    /* Tab content - closed */
    .tab-content
    {
        max-height: 0;
        -webkit-transition: max-height .35s;
        -o-transition: max-height .35s;
        transition: max-height .35s;
    }

    /* :checked - resize to full height */
    .tab input:checked ~ .tab-content
    {
        max-height: 100vh;
    }

    /* Label formatting when open */
    .tab input:checked + label
    {
        /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
        border-left-width: 2px; /*.border-l-2*/
        border-color: #6574cd; /*.border-indigo*/
        background-color: #f8fafc; /*.bg-gray-100 */
        color: #6574cd; /*.text-indigo*/
    }

    /* Icon */
    .tab label::after
    {
        float:right;
        right: 0;
        top: 0;
        display: block;
        width: 1.5em;
        height: 1.5em;
        line-height: 1.5;
        font-size: 1.25rem;
        text-align: center;
        -webkit-transition: all .35s;
        -o-transition: all .35s;
        transition: all .35s;
    }

    /* Icon formatting - closed */
    .tab input[type=checkbox] + label::after
    {
        content: "+";
        font-weight:bold; /*.font-bold*/
        border-width: 1px; /*.border*/
        border-radius: 9999px; /*.rounded-full */
        border-color: #b8c2cc; /*.border-grey*/
    }
    .tab input[type=radio] + label::after
    {
        content: "\25BE";
        font-weight:bold; /*.font-bold*/
        border-width: 1px; /*.border*/
        border-radius: 9999px; /*.rounded-full */
        border-color: #b8c2cc; /*.border-grey*/
    }

    /* Icon formatting - open */
    .tab input[type=checkbox]:checked + label::after
    {
        transform: rotate(315deg);
        background-color: #6574cd; /*.bg-indigo*/
        color: #f8fafc; /*.text-grey-lightest*/
    }
    .tab input[type=radio]:checked + label::after
    {
        transform: rotateX(180deg);
        background-color: #6574cd; /*.bg-indigo*/
        color: #f8fafc; /*.text-grey-lightest*/
    }
</style>