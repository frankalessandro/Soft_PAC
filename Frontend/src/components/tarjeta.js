import '../Styles/tarjeta.css'

export const tarjeta = (texto, texto2) => {
    let tarjeta = `
    <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">FLIP CARD</p>
            <p>${texto}</p>
        </div>
        <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>${texto2}</p>
        </div>
    </div>
</div>`
    return tarjeta
}