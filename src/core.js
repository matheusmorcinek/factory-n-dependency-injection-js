function createCore() {

    function start() {

        console.log(`> [Core] starting...`);    
        //db
        //webserver
        console.log(`> [Core] Starting done! System running!`);
    }


    function stop() {

        console.log('> [Core] stopping...');
        //db
        //webserver
        console.log('> [Core] Stopping done!');
    }

    return {
        start,
        stop
    }
}

export default createCore;