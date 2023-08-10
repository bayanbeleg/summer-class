const zuragnuud = ["🐶", "🐱", "🐭", "🐰", "🦊", "🐻", "🐼", "🐨"];

  const HusnegtHolih = (massiv) => massiv.sort(() => 0.5 - Math.random());

  const togloomEhluuleh = () => {
    const board = document.getElementById("board");
    board.innerHTML = "";

    const holisonZuragnuud = [...zuragnuud, ...zuragnuud];
    HusnegtHolih(holisonZuragnuud);

    for (const zurag of holisonZuragnuud) {
      const card = cardUusgeh(zurag);
      board.appendChild(card);
    }
  };

  const cardUusgeh = (zurag) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = "?";
    card.addEventListener("click", () => cardDelgeh(card, zurag));
    return card;
  };

  let ehniiDelgesenCard = null;
  let hoyrtDelgesenCard = null;

const cardDelgeh = (card, zurag)=> {
    if (!ehniiDelgesenCard) {
      ehniiDelgesenCard = card;
      ehniiDelgesenCard.textContent = zurag;
    } else if (!hoyrtDelgesenCard) {
      hoyrtDelgesenCard = card;
      hoyrtDelgesenCard.textContent = zurag;
      setTimeout(() => delgesenCardShalgah(), 500);
    }
  }

  const delgesenCardShalgah = () => {

    /*Дэлгэсэн 2 карт тохирч байгаа эсэхийг шалгах функц бичээрэй. 
    Таарсан картнуудыг "taarsan" гэсэн class-тай элеметүүд дээр 
    нэмээд дараа нь хожсон эсэхийг шалгана. Жишээ нь ehniiDelgesenCard.classList.add("taarsan");
    Таараагүй тохиолдолд картуудыг буцаагаад нууна.*/
    if(/*Шалгах нөхцөлөө оруулаарай*/){
      ehniiDelgesenCard.classList.add("taarsan");
      ehniiDelgesenCard =null;
      hoyrtDelgesenCard =null;
      hojsonEseh();
    } else cardaaNuuh();
  }

  const cardaaNuuh =() => {
    /*нуух үйлдлийг хий*/
    ehniiDelgesenCard=null;
    hoyrtDelgesenCard = null;
  }

  const hojsonEseh=()=> {
    const taarsanCardnuud = document.querySelectorAll(".card.taarsan");
        if (/*Шалгах нөхцөлөө оруулаарай*/) {
          setTimeout(() => {
            alert("Баяр хүргэе та яллаа");
          }, 500);
        }
  }