const allSeats = document.getElementsByClassName('select-seat');


for (const seat of allSeats) {
    seat.addEventListener('click', function (e) {
        setColor(e.target);
        disableElement(seat);

        // incrementSeat
        let incrementSeat = getInnerText('increment-seat');
        incrementSeat ++;
        setInnerTextById('increment-seat', incrementSeat);
        // decrementSeat
        let decrementSeat = getInnerText('decrement -seat');
        decrementSeat --;
        setInnerTextById('decrement -seat', decrementSeat);
        
        const seatName = e.target.innerText;

        const checkOut = document.getElementById('check-out');
        const ticketPrice = getInnerText('ticket-price');
        
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        h1.innerText = seatName;
        const h2 = document.createElement("h2");
        h2.innerText = "Economoy";
        const h3 = document.createElement("h3");
        h3.innerText = ticketPrice;
        li.appendChild(h1);
        li.appendChild(h2);
        li.appendChild(h3);
        checkOut.appendChild(li);

        let totalPrice = getInnerText('total-price');
        totalPrice = totalPrice + ticketPrice;
        setInnerTextById('total-price', totalPrice);
        setInnerTextById('grand-price', totalPrice);
        
        const seatBook = getInnerText('increment-seat')
        if(seatBook === 4){
            
        }
    })
}






