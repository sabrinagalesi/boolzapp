/* MILESTONE 1 
    -Replica della grafica ​ con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse 
    -Aggiunta di un messaggio​ : l’utente scrive un testo nella parte bassa e cliccando “invia” il testo viene aggiunto al thread sopra, come messaggio verde 
   MILESTONE 2 
    -Risposta dall’interlocutore: ​ ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo. 
    -Ricerca utenti: ​ scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti 
    il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
   MILESTONE 3
    -Click sul contatto​ mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione 
    - Cancella messaggio: ​ cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato.
    */
    
    function rispostaInterlocutore() {
        $(contenitoreMessaggi).append("<div class='friend-messages-contenitor'><div class='friend-messages'><span class='messages-written'>ok</span></div></div>")
    }

    function ricercaUtente() {
        var utenti= $(".name-account");
        $(utenti).each(function(){
            var utenteSingolo = $(this).text().trim().toLowerCase();
            if(utenteSingolo.includes($("#search").val().toLowerCase())) {
                console.log(utenteSingolo, "account trovato");
                $(this).parent().show();
            } else{
                $(this).parent().hide();
            }
        })
    }


    $(document).ready(function(){
        $(".friends-account").click(function(){
            $("#first-screen").hide();
            $("#contenitor-components").show();

            //Prendere il data attribute di quello che ho cliccato 
            var attribute = $(this).attr("data-account");
            console.log(attribute);
            var contenitoreMessaggi = $(".messages[data-chat='" + attribute + "']") //$( "input[value='Hot Fuzz']" )
            $(".messages").hide();
            contenitoreMessaggi.show();
            
            console.log(contenitoreMessaggi);
            //Faccio apparire la conversazione che ho cliccato 
        })

        $("#arrow").click(function(){
            $(contenitoreMessaggi).append('<div class="my-messages-contenitor"><div class="my-messages"><span class="messages-written">' + $("#write").val() + '</span></div></div>');
            $("#write").val("");
            setTimeout(rispostaInterlocutore,1000);
        });

        $("#search").keyup(ricercaUtente);
    })


