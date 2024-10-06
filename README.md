# League of Legends Build Scraper

## Description

This project is a React application that scrapes the League of Legends website, [OP.gg](https://www.op.gg/), to retrieve item builds for ARAM (All Random All Mid) mode. The application allows users to input an "OP.gg" URL, scrape item build data, and display it in a sortable table format. The table includes information about each build's items, win rate, and games played.

## Features

- **Scrape Builds**: Scrape item builds from the URL
- **Display Data**: Show item builds in a table with columns for build number, items, win rate, and games played.
- **Sort by Win Rate**: Sort the displayed builds by their win rate to easily identify the most effective builds.
- **Error Handling**: Display errors if the data fetching process encounters any issues.

## Usage

1. **Enter a URL**:
    Input the URL of the OP.gg page you want to scrape into the text field.

2. **Click "Scrape"**:
    Press the "Scrape" button to fetch the data from the provided URL.

3. **View Results**:
    The item builds will be displayed in a table. You can sort the builds by win rate using the "Sort" button.

## Code Overview

- **App Component**: Utilizes React for the frontend and Flask for the backend. Manages state for input value, scraped data, loading status, and errors. Handles the scraping request and updates the table with the fetched data.
- **SortWinRate Component**: Provides a button to sort the displayed builds by their win rate.


