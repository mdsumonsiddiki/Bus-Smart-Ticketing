const allSeats = document.getElementsByClassName('select-seat');
let count = 0;
for (const seat of allSeats) {
    seat.addEventListener('click', function (e) {
        count = count + 1;
        if (count <= 4) {
            setColor(e.target);
            disableElement(seat);
            // incrementSeat
            let incrementSeat = getInnerText('increment-seat');
            incrementSeat++;
            setInnerTextById('increment-seat', incrementSeat);
            // decrementSeat
            let decrementSeat = getInnerText('decrement -seat');
            decrementSeat--;
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

            const seatBook = getInnerText('increment-seat');
            if (seatBook === 4) {
                removeClassById('cuppon-feild', 'pointer-events-none')
                removeClassById('cuppon-btn', 'bg-gray-400')
                addClassById('cuppon-btn', 'bg-[#1DD100]')

                const applyBtn = document.getElementById('cuppon-btn');
                applyBtn.addEventListener('click', function (e) {
                    const cupponCodeOne = getInnerTextSting('new15')
                    const cupponCodeTwo = getInnerTextSting('couple-offer')
                    const offerInputValue = document.getElementById('offer-input').value;

                    if (cupponCodeOne === offerInputValue) {
                        const discountPrice = totalPrice * 0.15;
                        const totalDiscount = totalPrice - discountPrice;
                        removeClassById('discount', 'hidden')
                        addClassById('discount', 'flex')
                        setInnerTextById('Discount-price', discountPrice)
                        setInnerTextById('grand-price', totalDiscount);
                        addClassById('coupon-area', 'hidden')

                    }
                    else if (cupponCodeTwo === offerInputValue) {
                        const discountPriceTwo = totalPrice * 0.20;
                        const totalDiscountTwo = totalPrice - discountPriceTwo;
                        removeClassById('discount', 'hidden')
                        addClassById('discount', 'flex')
                        setInnerTextById('Discount-price', discountPriceTwo)
                        setInnerTextById('grand-price', totalDiscountTwo);
                        addClassById('coupon-area', 'hidden')
                        addClassById('coupon-warning', 'hidden')
                    }
                    else {
                        removeClassById('coupon-warning', 'hidden')
                    }
                })
            };

            if (seatBook === 1) {
                removeClassById('submit-btn', 'bg-gray-400')
                removeClassById('submit-btn', 'pointer-events-none')
                addClassById('submit-btn', 'bg-[#1DD100]')
            }

            let submitBtn = document.getElementById('submit-btn');
            submitBtn.addEventListener('click', function (e) {
                let inputNumber = document.getElementById('number-input').value.trim();
                let convertInputNumber = parseInt(inputNumber);

                if (convertInputNumber !== "" && !isNaN(convertInputNumber)) {
                    addClassById('input-warning', 'hidden')
                    removeClassById('pop-up', 'hidden')
                    const popUp = document.getElementById('popup-btn');
                    popUp.addEventListener('click', function (e) {
                        addClassById('pop-up', 'hidden')
                    })
                }
                else {
                    removeClassById('input-warning', 'hidden')
                }
            })

        }
        else {
            return;
        }
    })
}