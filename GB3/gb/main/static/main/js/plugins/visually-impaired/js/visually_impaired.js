class VisuallyImpaired {
    constructor() {
        this.countFont = 0;
        this.checkVoice = true;
        this.checkPhotoOff = false;
        this.checkBlackAndWhitePhoto = false;
        this.checkSerif = false;
        this.overlayCheck = false;
        this.els = [
            'header', 'main', 'footer', 'button', 'p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5'
        ]
        this.classes = [
            'black-and-white',
            'white-and-black',
            'green-and-darkbrown',
            'brown-and-beige',
            'blue-and-lightblue'
        ];
    }
    // Меняет межстрочный интервал
    lineSpace(el) {
        this.close()
        let index = $(el).attr('data-index');
        for (let i = 0; i < this.els.length; ++i) {
            if (parseInt(index) === 0) {
                $(this.els[i]).addClass('line-height-normal')
                $(this.els[i]).removeClass('line-height-very-large')
                $(this.els[i]).removeClass('line-height-large')
            } else if (parseInt(index) === 1) {
                $(this.els[i]).addClass('line-height-large')
                $(this.els[i]).removeClass('line-height-very-large')
                $(this.els[i]).removeClass('line-height-normal')
            } else {
                $(this.els[i]).addClass('line-height-very-large')
                $(this.els[i]).removeClass('line-height-large')
                $(this.els[i]).removeClass('line-height-normal')
            }
        }
        this.open()
        switch (parseInt(index)) {
            case 0: return this.voice('standard-line-height-mp3')
            case 1: return this.voice('large-line-height-mp3')
            case 2: return this.voice('very-large-line-height-mp3')
        }
    }

    // Работа с голосом
    voice(title) {
        if (!this.checkVoice) {
            return null;
        }
         let Voice = new Audio();
         Voice.src = $('#'+title).attr('src')
         Voice.play()
    }

    // Включение выключение озвучки
    switchVoice() {
        this.checkVoice = !this.checkVoice
        if (!this.checkVoice) {
            $('#voice').removeClass('btn-change_voice-on')
            $('#voice').addClass('btn-change_voice-off')
            this.voice('sintez-off-mp3')
        } else {
            $('#voice').addClass('btn-change_voice-on')
            $('#voice').removeClass('btn-change_voice-off')
            this.voice('sintez-on-mp3')
        }
    }

    // Меняет межбуквенный интервал
    letterInterval(el) {
        this.close()
        let index = $(el).attr('data-index');
        for (let i = 0; i < this.els.length; ++i) {
            if (parseInt(index) === 0) {
                $(this.els[i]).addClass('letter-interval-normal')
                $(this.els[i]).removeClass('letter-interval-large')
                $(this.els[i]).removeClass('letter-interval-very-large')
            } else if (parseInt(index) === 1) {
                $(this.els[i]).addClass('letter-interval-large')
                $(this.els[i]).removeClass('letter-interval-very-large')
                $(this.els[i]).removeClass('letter-interval-normal ')
            } else {
                $(this.els[i]).addClass('letter-interval-very-large')
                $(this.els[i]).removeClass('letter-interval-normal')
                $(this.els[i]).removeClass('letter-interval-large')
            }
        }
        this.open()
        switch (parseInt(index)) {
            case 0: return this.voice('standard-letter-spacing-mp3')
            case 1: return this.voice('large-letter-spacing-mp3')
            case 2: return this.voice('very-large-letter-spacing-mp3')
        }
    }
    // Вкл картинки на сайте
    photoOff() {
        $('<div class="no-pictures d-flex flex-row align-items-center"><p class="text-center w-100">Картинка</p></div>').insertBefore('img')
        $('#photo-off').text('Включить')
        this.checkPhotoOff = !this.checkPhotoOff;
        $('img').hide()
        this.voice('image-off-mp3')
    }
    // Выкл картинки на сайте
    photoOn() {
        $('.no-pictures').remove()
        $('#photo-off').text('Выключить')
        this.checkPhotoOff = !this.checkPhotoOff;
        $('img').show()
        this.voice('image-on-mp3')
    }
    // Увеличить шрифт
    fontUp() {
        for (let i = 0; i < this.els.length; ++i) {
            let fontSize = $(this.els[i]).css('font-size');
            let fontInt = parseInt(fontSize) + 1;
            fontSize = fontInt + 'px';
            $(this.els[i]).attr('style', 'font-size: ' + fontSize + ' !important')
        }
        this.voice('font_up-mp3')
    }

    // Уменьшить шрифт
    fontDown() {
        for (let i = 0; i < this.els.length; ++i) {
            let fontSize = $(this.els[i]).css('font-size');
            let fontInt = parseInt(fontSize) - 1;
            fontSize = fontInt + 'px';
            $(this.els[i]).attr('style', 'font-size: ' + fontSize + ' !important')
        }
        this.voice('font_down-mp3')
    }

    // Открыть интерфейс
    open() {
        let photoOffText = this.checkPhotoOff ? 'Включить' : 'Выключить'
        let photoBlackWhiteText = this.checkBlackAndWhitePhoto ? 'Выключить ч/б' : 'Черно-белые'
        let serifText = this.checkSerif ? 'Без засечек' : 'Засечки'
        let classVoice = this.checkVoice ? 'btn-change_voice-on' : 'btn-change_voice-off'
        this.overlayCheck = !this.overlayCheck
        $('body').prepend(
            '<div class="visually-impaired w-100 h-25 container pt-5 pb-5">\n' +
            '    <div class="d-flex flex-row flex-wrap justify-content-between">\n' +
            '        <div class="d-flex flex-column align-items-center">\n' +
            '            <p id="visually-impaired-text-size" class="text-uppercase">Размер шрифта</p>\n' +
            '            <div class="visually-impaired__buttons-font-size">\n' +
            '                <button class="btn btn-dark" id="font-down">Уменьшить</button>\n' +
            '                <button class="btn btn-dark" id="font-up">Увеличить</button>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="d-flex flex-column align-items-center">\n' +
            '            <p class="text-uppercase">Цвета сайта</p>\n' +
            '            <div class="visually-impaired__buttons-color">\n' +
            '                <button class="btn btn-change-color" id="black-and-white">Цвет</button>\n' +
            '                <button class="btn btn-change-color" id="white-and-black">Цвет</button>\n' +
            '                <button class="btn btn-change-color" id="blue-and-lightblue">Цвет</button>\n' +
            '                <button class="btn btn-change-color" id="brown-and-beige">Цвет</button>\n' +
            '                <button class="btn btn-change-color" id="green-and-darkbrown">Цвет</button>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="d-flex flex-column align-items-center">\n' +
            '            <p class="text-uppercase">ИЗОБРАЖЕНИЯ</p>\n' +
            '            <div class="visually-impaired__buttons-color">\n' +
            '                <button class="btn btn-dark" id="photo-off">' + photoOffText + '</button>\n' +
            '                <button class="btn btn-dark" id="photo-black-and-white">' + photoBlackWhiteText + '</button>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="d-flex flex-column align-items-center">\n' +
            '            <p class="text-uppercase">Озвучивание</p>\n' +
            '            <div class="justify-content-around">\n' +
            '                <button class="btn '+classVoice+' " id="voice"></button>\n' +
            '            </div>' +
            '        </div>\n' +
            '    </div>\n' +
            '<div class="pt-5 d-flex flex-row flex-wrap justify-content-around">\n' +
            '        <div class="d-flex flex-column align-items-center">\n' +
            '            <p class="text-uppercase">МЕЖДУСТРОЧНЫЙ ИНТЕРВАЛ</p>\n' +
            '            <div>\n' +
            '                <button class="btn btn-dark btn-change_line-height" data-index="0">Стандартный</button>\n' +
            '                <button class="btn btn-dark btn-change_line-height" data-index="1">Средний</button>\n' +
            '                <button class="btn btn-dark btn-change_line-height" data-index="2">Большой</button>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="d-flex flex-column align-items-center">\n' +
            '            <p class="text-uppercase">МЕЖБУКВЕННЫЙ ИНТЕРВАЛ</p>\n' +
            '            <div>\n' +
            '                <button class="btn btn-dark btn-change_letter-spacing" data-index="0">Одинарный</button>\n' +
            '                <button class="btn btn-dark btn-change_letter-spacing" data-index="1">Полуторный</button>\n' +
            '                <button class="btn btn-dark btn-change_letter-spacing" data-index="2">Двойной</button>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="d-flex flex-column align-items-center">\n' +
            '            <p class="text-uppercase">ШРИФТ</p>\n' +
            '            <div>\n' +
            '                <button class="btn btn-dark" id="btn-change_serif" data-index="0">' + serifText + '</button>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>' +
            '</div>'
        )
    }
    // Черно-белые фото вкл
    blackAndWhiteOn() {
        $('img').addClass('black-and-white-pictures')
        $('#photo-black-and-white').text('Выключить ч/б')
        this.checkBlackAndWhitePhoto = !this.checkBlackAndWhitePhoto
        this.voice('image-black-white-on-mp3')
    }

    // Черно-белые фото выкл
    blackAndWhiteOff() {
        $('img').removeClass('black-and-white-pictures')
        $('#photo-black-and-white').text('Черно-белые')
        this.checkBlackAndWhitePhoto = !this.checkBlackAndWhitePhoto
        this.voice('image-black-white-off-mp3')
    }

    // Закрыть оверлей интерфейса
    close() {
        this.overlayCheck = !this.overlayCheck
        $('.visually-impaired').remove()
    }

    //Вкл/Выкл засечки у текста
    textSerif(el) {
        let index = parseInt($(el).attr('data-index'))
        if (index === 1) {
            this.voice('font_sans-serif-mp3')
        } else {
            this.voice('font_serif-mp3')
        }

        for (let i = 0; i < this.els.length; i++) {
            if (index === 1) {
                $(this.els[i]).removeClass('text-serif')
                $(el).attr('data-index', 0)
                $(el).html('Засечки')
                this.checkSerif = false;
            } else {
                $(this.els[i]).addClass('text-serif')
                $(el).html('Без засечек')
                $(el).attr('data-index', 1)
                this.checkSerif = true;
            }
        }
    }

    switchPhoto() {
        return this.checkPhotoOff ? this.photoOn() : this.photoOff();
    }

    switchBlackAndWhitePhoto() {
        return this.checkBlackAndWhitePhoto ? this.blackAndWhiteOff() : this.blackAndWhiteOn();
    }

    overlay() {
        return this.overlayCheck ? this.close() : this.open()
    }

    // Меняет цвет сайта
    color(el) {
        this.close()
        let classes = this.classes
        let attrClass = $(el).attr('id');
        classes = jQuery.grep(classes, function (value) {
            return value !== attrClass;
        });
        for (let i = 0; i < this.els.length; i++) {
            $(this.els[i]).addClass(attrClass)
            $(this.els[i]).removeClass(classes.join(' '))
        }
        this.open()
        switch ($(el).attr('id')) {
            case 'black-and-white' : return this.voice('color-black-white-mp3')
            case 'white-and-black' : return this.voice('color-white-black-mp3')
            case 'blue-and-lightblue' : return this.voice('color-darkblue-lightblue-mp3')
            case 'brown-and-beige' : return this.voice('color-brown-beige-mp3')
            case 'green-and-darkbrown' : return this.voice('color-green-darkbrown-mp3')
        }
    }
}

let app = new VisuallyImpaired()

jQuery(document).ready(function () {
    $('.visually_impaired-open').click(function () {
        app.overlay()
        $(document).delegate('#font-down', 'click', function () {
            app.fontDown()
        }).delegate('#font-up', 'click', function () {
            app.fontUp()
        }).delegate('.btn-change-color', 'click', function () {
            app.color($(this))
        }).delegate('#photo-off', 'click', function () {
            app.switchPhoto()
        }).delegate('#photo-black-and-white', 'click', function () {
            app.switchBlackAndWhitePhoto()
        }).delegate('.btn-change_line-height', 'click', function () {
            app.lineSpace($(this))
        }).delegate('.btn-change_letter-spacing', 'click', function () {
            app.letterInterval($(this))
        }).delegate('#btn-change_serif', 'click', function () {
            app.textSerif($(this))
        }).delegate('#voice', 'click', function () {
            app.switchVoice()
        })
    })
})