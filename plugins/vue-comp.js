import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import TModal from 'vue-tailwind/dist/t-modal'
import TButton from 'vue-tailwind/dist/t-button'

const settings = {
  't-modal': {
    component: TModal,
    props: {
      fixedClasses: {
        overlay:
          'z-40  overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
        wrapper: 'relative mx-auto z-50 max-w-lg px-3 py-12',
        modal: 'overflow-visible relative  rounded',
        body: 'p-3',
        header: 'border-b p-3 rounded-t',
        footer: ' p-3 rounded-b',
        close:
          'flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      },
      classes: {
        overlay: 'bg-gray-900/50',
        wrapper: '',
        modal: 'bg-gray-800 shadow-md text-white ',
        body: 'p-3 font-normal',
        header: 'border-gray-100 border-b-gray-900 font-bold',
        footer: 'bg-gray-800 font-medium',
        close: 'bg-violet-500 text-white hover:bg-red-400 hover:text-gray-900',
        closeIcon: 'fill-white h-4 w-4',
        overlayEnterClass: 'opacity-0',
        overlayEnterActiveClass: 'transition ease-out duration-100',
        overlayEnterToClass: 'opacity-100',
        overlayLeaveClass: 'opacity-100',
        overlayLeaveActiveClass: 'transition ease-in duration-75',
        overlayLeaveToClass: 'opacity-0',
        enterClass: '',
        enterActiveClass: '',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: '',
      },
    },
  },
  't-button': {
    component: TButton,
    props: {
      fixedClasses:
        'block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      classes:
        'text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs w-fit px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600g-gray-600 focus:ring-gray-600 dark:text-gray-300 dark:hover:text-white',
      variants: {},
    },
  },
}

Vue.use(VueTailwind, settings)
