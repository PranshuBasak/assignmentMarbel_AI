# Frontend Engineer Assignment README

## Assignment Overview

### Task

I am required to integrate a comparison chart panel into an existing web application dashboard. The chart should display the comparison of selected metrics in two time periods, as outlined in the provided Figma design. I may optionally include a date range picker for selecting comparison periods.

## Assignment Details

### Web Application Development

- Utilizing the provided refine template from the GitHub repository.
- Replacing or editing the existing charts panel to display the comparison of selected metrics in two time periods.
- Optionally, adding a date range picker for selecting comparison periods.
- I am free to use any open-source library or customize/modify existing components.

### Mock Data

- I have used the mock data provided in the template: [Mock Data](https://api.finefoods.refine.dev/)

### Figma Design Reference

- I referred to the Figma design prototype for the component I needed to integrate: [Figma Design: Figma](https://www.figma.com/file/ZpmOhfE92tHoZZziLBt7at/Marble-React-Components?type=design&node-id=235-3475&mode=design&t=xUVlgVpKHxD4VkaA-0), Prototype

## Approach

- **Componentization**: Organized the code into reusable components (NewStats and Chart) for better maintainability and reusability.
- **State Management**: Utilized React's useState hook to manage the active state of the dashboard.
- **Data Fetching**: Used the useList hook provided by "@refinedev/core" to fetch data asynchronously.
- **Memoization**: Memoized the chart data using the useMemo hook to avoid unnecessary re-renders and computations.
- **Conditional Rendering**: Conditionally rendered components based on the state of activeState.
- **Responsive UI**: Utilized Tailwind CSS classes for responsive and visually appealing UI design.

## Setup and Run

Follow these steps to set up and run the Vite project:

1. **Clone the Repository:**
       Clone the project repository to your local machine using the following command:
    
    ```shell
    git clone https://github.com/PranshuBasak/assignmentMarbel_AI.git
	```
       
2. **Navigate to Project Directory:**
       Navigate to the project directory in your terminal:
	```shell
	cd ./assignmentMarbel_AI
	```
    
3. **Install Dependencies:**
       Install project dependencies using your preferred package manager. For example, using npm:
    ```shell
    npm install
	```
    
4. **Run the Development Server:**
       Start the development server by running the following command:
    ```shell
    npm run dev
	```
    
5. **Access the Application:**
       Once the development server is running, you can access the application in your browser at http://localhost:5173.
    
## Deployed Application

The application has been deployed and can be accessed using the following link:

[Marble AI Dashboard](https://marbleai.pranshubasak.co/)

## Components Overview

This section explains the components used in the project and their functionalities.

---

#### `NewStats` Component

The `NewStats` component is responsible for rendering a set of data cards representing different statistics. It accepts props such as daily revenue, daily orders, new customers, `onClick` handler, and an active state to toggle the display. Each data card displays a specific statistic and allows the user to toggle between different sets of data.

**Props:**

- `dailyRevenue`: Data for daily revenue.
- `dailyOrders`: Data for daily orders.
- `newCustomers`: Data for new customers.
- `onClick`: Handler for toggling the active state.
- `active`: Indicates whether the component is active or not.

#### `DataCard` Component

The `DataCard` component represents an individual data card displaying a specific statistic. It includes the title of the statistic, the total value, a trend indicator, and a dropdown menu for additional actions. The component changes its appearance based on the active state and allows interaction with the user.

**Props:**

- `title`: Title of the statistic.
- `data`: Data associated with the statistic.
- `active`: Indicates whether the component is active or not.
- `onClick`: Handler for clicking on the data card.
- `format`: Format of the data value.

#### `HoverCard` Component

The `HoverCard` component provides additional information about a specific statistic when hovered over. It displays a brief description of the statistic to provide context to the user.

#### `DropDown` Component

The `DropDown` component renders a dropdown menu for additional actions related to a statistic. It includes options such as editing the statistic or accessing additional information. The dropdown menu changes its appearance based on user interaction.

**Props:**

- `active`: Indicates whether the dropdown menu is active or not.

#### `Chart` Component

The `Chart` component is responsible for rendering an area chart using the Recharts library. It accepts props such as the KPI (Key Performance Indicator), data, and colors for styling the chart.

**Props:**

- `kpi`: Key Performance Indicator displayed on the chart.
- `data`: Array of chart data points.
- `colors`: Object containing stroke and fill colors for the chart.

The chart component also includes functionality for filtering data based on a selected date range using a date picker.

#### `CustomLegend` Component

The `CustomLegend` component renders a custom legend for the chart. It includes two date range pickers, allowing the user to select a specific date range for filtering data. The component communicates with the parent component to update the selected date range.

**Props:**

- `onRangeChange`: Handler function to update the selected date range.

#### `CustomToolTip` Component

The `CustomToolTip` component renders a custom tooltip for the chart. It displays information about the data point being hovered over, including the date, value, and percentage change. The tooltip is styled and positioned dynamically based on the mouse cursor position.

**Props:**

- `active`: Indicates whether the tooltip is active or not.
- `payload`: Data payload of the hovered data point.
- `label`: Label for the data point.
- `coordinate`: Coordinates of the mouse cursor position.

## Dependencies Used

### Recharts Library

1. **Import Statements**: I've imported various components from the Recharts library:
    
    - `ResponsiveContainer`: Allows the chart to resize responsively based on its container.
    - `AreaChart`: Renders an area chart.
    - `CartesianGrid`: Renders the Cartesian grid for the chart.
    - `XAxis`: Renders the X-axis for the chart.
    - `YAxis`: Renders the Y-axis for the chart.
    - `Tooltip`: Renders a tooltip for data points on the chart.
    - `Area`: Renders an area within the chart.
2. **Chart Rendering**:
    
    - `AreaChart` and its related components are used to render the chart with the provided data.
    - `CartesianGrid` is utilized to draw grid lines on the chart for better visualization. 
    - `XAxis` and `YAxis` components define the X and Y axes respectively, with custom styling and configurations. 
    - `Tooltip` component is customized with a `CustomToolTip` component to provide additional information on data points.
      
3. **Data Filtering**:
- State management is used to handle date range selection for filtering data. 
-  `useState` hook is used to manage the selected date range.
-  `useEffect` hook is employed to filter the chart data based on the selected date range. 
- A custom function `handleRangeChange` updates the selected date range and filters the data accordingly.``

### React-Date-Range Library

1. **Import Statements**: I've imported necessary components and functions from the react-date-range library:
    
    - `DateRangePicker`: Renders a date range picker.
    - `format`, `addDays` from date-fns: Provides date formatting and manipulation functions.
2. **Date Range Selection**:
    
    - `DateRangePicker` component is utilized to allow users to select a date range for filtering chart data.
    - It's configured to be horizontally oriented and editable, with the ability to select start and end dates.
    - `onChange` handler updates the selected date range and triggers data filtering.

### Daisy UI Library

Daisy UI provides a set of customizable UI components to enhance the visual appearance and user experience of your application.

#### Components Utilized from Daisy UI

1. **DataCard Component**:
    
    - The `DataCard` component is a custom component used to display individual data statistics in a visually appealing manner.
    - It includes features such as a title, total value, trend indicator, and a dropdown menu for additional actions.
    - This component enhances the readability and presentation of data within the dashboard.
2. **DropDown Component**:
    
    - The `DropDown` component renders a dropdown menu for additional actions related to a statistic.
    - It includes options such as editing the statistic or accessing additional information, providing users with enhanced functionality.
3. **HoverCard Component**:
    
    - The `HoverCard` component provides additional contextual information about a specific statistic when hovered over.
    - It displays a brief description of the statistic, enhancing user understanding and engagement.

## Closing Note

I am eager to demonstrate my skills and contribute to your team. Please do not hesitate to reach out if you need any further clarification or have any questions regarding the assignment.

Thank you for considering my application.

Warm regards, Pranshu Basak


