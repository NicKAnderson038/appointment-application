# Appointment Application

## Requirments - installations

1. [Node.js](https://nodejs.org/en/)
2. [Yarn](https://yarnpkg.com/en/) : "Recommended, but optional."

#

<br>

## How to start

```bash
After installing node.js, navigate to the project and open it with a code editor or IDE.

# The enter the following commands in your terminal.

npm install
npm run start

# If yarn was installed. Enter these commands instead.

yarn
yarn start
```

#

<br>

## Testing offline prompt.

```bash
In the browser, open chrome developer tools.

Select the network tab and check 'Offline'.

A network error message will show when navigating from the 'Appointments' page to the 'Date Pick' page.
```

<p style="font-size:11px;">** The navigations are located at the top of the application.</p>

#

<br>

## Testing older dates or today's date selection.

```bash
A scheduling error message will show when selecting todays date or an older date on the calendar followed by clicking submit.
```

#

<br>

## Testing scheduling conflict.

```bash
Any date that overlaps (by Start time & End time) will show a warning prompt.
```

#

<br>
# appointment-application
