const themeOverride = {
    "root": {
      "base": "max-w-screen-xl mx-auto",

      "inner": {
        "base": "mx-auto flex flex-wrap items-center justify-between",
        "fluid": {
          "on": "",
          "off": "container"
        }
      }
    },
    "brand": {
      "base": "flex items-center"
    },
    "collapse": {
      "base": "w-full lg:block lg:w-auto",
      "list": "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium",
    },
    "link": {
      "base": "block py-2 pl-3 pr-4 lg:p-0",
      "active": {
        "on": "bg-cyan-700 text-white dark:text-white lg:bg-transparent lg:text-cyan-700",
        "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:hover:bg-transparent lg:hover:text-cyan-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
      }

    },
    "toggle": {
      "base": "inline-flex items-center rounded-lg p-2 text-sm text-text hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-text-dark dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden mr-2",
      "icon": "h-6 w-6 shrink-0"
    }
  }

  export default themeOverride;