function createDatabaseConnection() {

    function start() {

        console.log('> [database] Starting...');
        console.log('> [database] Connecting to MySQL...');
        console.log('> [database] Running migrations...');
        console.log('> [database] Starting done!');

        // intentionally throwing an error here, to prove that when running the core test, we are testing the unit / component independently
        throw new Error('Connection failed!');
    }

    function stop() {

        console.log('> [database] Stopping...');
        console.log('> [database] Closing MySQL connection...');
        console.log('> [database] Stopping done!');
    }

    return {
        start,
        stop
    }
}

export default createDatabaseConnection;