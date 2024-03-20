describe('Cypress Tests', () => {

  //--------------------REGISTRATION-----------------------

  it('Сheck for mandatory', () => {

      cy.fixture('cypressTest').then(data => {
          //Переходим на страницу регистрации
          cy.visit(data.main_url)

          //Проверяем на обязательность

          //Если поле логина пустое
          cy.get('div[class="form__labels"] input:first')
              .type(data.login)
          cy.get('div[class="form__labels"] input:first').clear();
          cy.get('div[class="form__labels"] div:first div:nth-child(2) input')
              .type(data.email)
          cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
              .type(data.password)
          cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
              .type(data.return_password)
          cy.get('.button__background-color-green').should('be.disabled')

          //Если пустое поле почты
          cy.get('div[class="form__labels"] input:first')
              .type(data.login)
          cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear()
          cy.get('.button__background-color-green').should('be.disabled')

          //Если путое поле пароля
          cy.get('div[class="form__labels"] div:first div:nth-child(2) input')
              .type(data.email)
          cy.get('div[class="form__labels"] div:first div:nth-child(3) input').clear()
          cy.get('.button__background-color-green').should('be.disabled')


          //Если пустое поле подтверждения пароля
          cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
              .type(data.password)
          cy.get('div[class="form__labels"] div:first div:nth-child(4) input').clear()
          cy.get('.button__background-color-green').should('be.disabled')
          cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
              .type(data.return_password)

          cy.get('div[class="form__buttons"] div:last button[type="submit"]')
              .click()

          //Если пустое поле фамилии
          cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input')
              .type(data.surname)
          cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').clear()

          cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input')
              .type(data.name)
          cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input')
              .type(data.patronymic)
          cy.get('.button__background-color-green').should('be.disabled')

          //Если пустое поле имени
          cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input')
              .type(data.surname)
          cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input').clear()
          cy.get('.button__background-color-green').should('be.disabled')
      })
    })

  it('Invalid characters', () => {
    cy.fixture('cypressTest').then(data => {

      //Переход на страницу регистрации
      cy.visit(data.main_url)

      //Негативный сценарий с недопустимыми символами

      //Логин с недопустимыми символами
      cy.get('div[class="form__labels"] input:first')
          .type(data.login_fail_number)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] input:first').clear().type(data.login_fail_symbol)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] input:first').clear().type(data.login_fail_whitespace)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] input:first').clear().type(data.login)

      //Почта c недопустимыми символами
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input')
          .type(data.email_fail_NoDogSymbol)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_pointStart)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_pointFinish)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_withoutName)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_morePoint)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_moreDogSymbol)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_symbol)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email)

      //Пароль c недопустимыми символами
      cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
          .type(data.password_fail_lower)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(3) input').clear().type(data.password_fail_upper)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(3) input').clear().type(data.password_fail_symbol)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(3) input').clear().type(data.password)

      //Потдверждение пароля со значением отличным от пароля
      cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
          .type(data.return_password_fail_NoReturn)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(4) input').clear().type(data.return_password)

      cy.get('div[class="form__buttons"] div:last button[type="submit"]')
          .click()

      //ФИО с недопустимыми символами
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input')
          .type(data.surname_fail_symbol)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').clear().type(data.surname)

      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input')
          .type(data.name_fail_symbol)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input').clear().type(data.name)

      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input')
          .type(data.patronymic_fail_symbol)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input').clear().type(data.patronymic)
    })
  })

  it('Invalid language', () => {
    cy.fixture('cypressTest').then(data => {

      //Переход на страницу регистрации
      cy.visit(data.main_url)

      //Негативный сценарий c недопустимым языком

      //Логин c недопустимым языком
      cy.get('div[class="form__labels"] input:first')
          .type(data.login_fail_language)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] input:first').clear().type(data.login)

      //Почта c недопустимым языком
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input')
          .type(data.email_fail_language)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email)

      //Пароль c недопустимым языком//не проходит
      cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
          .type(data.password)
      cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
          .type(data.return_password)

      cy.get('div[class="form__buttons"] div:last button[type="submit"]')
          .click()

      //ФИО с недопустимым языком
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input')
          .type(data.surname_fail_language)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').clear().type(data.surname)

      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input')
          .type(data.name_fail_symbol)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input').clear().type(data.name)

      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input')
          .type(data.patronymic_fail_language)
      cy.get('[data-v-a144256a]').should("exist")
      cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input').clear().type(data.patronymic)
    })
  })

  //----------------------------LOGIN----------------------------

  it('Login', () => {
    cy.visit('https://dev.profteam.su/login')

    // Проверка на несуществующие данные
    // Негативный ввод логина
    cy.get('.form-input--text').type('TesterStudent')
    cy.get('.form-input--password').type('Password1')
    cy.get('.button__background-color-green').click()
    cy.get('[data-v-a144256a]').should("exist")

    // Негативный ввод пароля
    cy.get('.form-input--text').clear().type('testerStudent')
    cy.get('.form-input--password').clear().type('Password')
    cy.get('.button__background-color-green').click()
    cy.get('[data-v-a144256a]').should("exist")

    cy.get('.form-input--text').clear().type('testerEmployer')
    cy.get('.form-input--password').clear().type('Password1')
    cy.get('.button__background-color-green').click()

    cy.url().should('include','/account/main')
  })

  it('Free fields', () => {

    //Проверка на незаполненные поля

    cy.visit('https://dev.profteam.su/login')
    cy.get('.form-input--text').clear()
    cy.get('.form-input--password').clear().type('Password')
    cy.get('.button__background-color-green').should('be.disabled')

    // Позитивный ввод логина и пароля
    cy.get('.form-input--text').clear().type('testerEmployer')
    cy.get('.form-input--password').clear().type('Password1')
    cy.get('.button__background-color-green').click()

    cy.url().should('include', '/account/main')
  })

  it('Emoji', () => {

    //Проверка на недопустимые эмоджи

    cy.visit('https://dev.profteam.su/login')
    cy.get('.form-input--text').type('Tester🤡Student')
    cy.get('.form-input--password').type('Password1')
    cy.get('.button__background-color-green').click()
    cy.get('[data-v-a144256a]').should("exist")

    cy.get('.form-input--text').clear().type('testerStudent')
    cy.get('.form-input--password').clear().type('Password1🤡')
    cy.get('.button__background-color-green').click()
    cy.get('[data-v-a144256a]').should("exist")

    // Позитивный ввод логина и пароля
    cy.get('.form-input--text').clear().type('testerEmployer')
    cy.get('.form-input--password').clear().type('Password1')
    cy.get('.button__background-color-green').click()

    cy.url().should('include', '/account/main')
  })

  //-----------------------NEEDS--------------------------

  it('Search test', () => {

    //Проверка работы поиска по потребностям

    cy.visit('https://dev.profteam.su/login')

    //Входим как студент
    cy.get('.form-input--text').type('testerStudent')
    cy.get('.form-input--password').type('Password1')
    cy.get('.button__background-color-green')
        .click()
    cy.wait(3000)

    //Переходим на страницу с потребностями
    cy.visit('https://dev.profteam.su/needs')

    //Совершаем поиск
    cy.get('div[data-v-69348679].search-input input.form-input--text').type('Проведение опроса')
    cy.get('div[data-v-69348679].search-input button')
        .click()

    //Нажимаем кнопку сброса фильтрации
    cy.get('div[data-v-379f6542].custom-modal-mobile__buttons button').click()
  })

  it('Salary test', () => {

    //Проверка раздела с заработной платой

    cy.visit('https://dev.profteam.su/login')

    //Входим как студент
    cy.get('.form-input--text').type('testerStudent')
    cy.get('.form-input--password').type('Password1')
    cy.get('.button__background-color-green')
        .click()
    cy.wait(3000)

    //Переходим на страницу с потребностями
    cy.visit('https://dev.profteam.su/needs')

    //Выбираем радио-кнопку
    //Позитивный диапозон
    cy.get('div[data-v-735ad2e9].radio-list input.radio-component__input:first').check()
    cy.get('div[data-v-fcc35a58].salary-field__wrapper div.salary-field__form-field-wrapper:first input.form-input--number').type(4)
    cy.get('div[data-v-fcc35a58].salary-field__wrapper div.salary-field__form-field-wrapper:nth-of-type(2) input.form-input--number').type(23)
    cy.get('div[data-v-379f6542].custom-modal-mobile__buttons button').click()

    //Негативный диапозон
    cy.get('div[data-v-735ad2e9].radio-list input.radio-component__input:first').check()
    cy.get('div[data-v-fcc35a58].salary-field__wrapper div.salary-field__form-field-wrapper:first input.form-input--number').type(23)
    cy.get('div[data-v-fcc35a58].salary-field__wrapper div.salary-field__form-field-wrapper:nth-of-type(2) input.form-input--number').type(4)
    // cy.get('div[data-v-379f6542].custom-modal-mobile__buttons button').click()
  })

  it('Choosing the type of employment test', () => {
    cy.visit('https://dev.profteam.su/login')

    //Проверка типа занятости

    //Входим как студент
    cy.get('.form-input--text').type('testerStudent')
    cy.get('.form-input--password').type('Password1')
    cy.get('.button__background-color-green')
        .click()
    cy.wait(3000)

    //Переходим на страницу с потребностями
    cy.visit('https://dev.profteam.su/needs')

    //Выбор типа занятости
    cy.get('div[data-v-3ef5d7d1].form-select div.form-select__selected').click()
    cy.wait(3000)
    cy.get('div[data-v-3ef5d7d1].form-select div.form-select__option:nth-of-type(2)').click()
  })

  it('Responding to a need test', () => {

    //Проверка отклика на потребность

    cy.visit('https://dev.profteam.su/login')

    //Входим как студент
    cy.get('.form-input--text').type('testerStudent')
    cy.get('.form-input--password').type('Password1')
    cy.get('.button__background-color-green')
        .click()
    cy.wait(3000)

    //Переходим на страницу с потребностями
    cy.visit('https://dev.profteam.su/needs')

    //Отклик на потребность
    cy.get('div[data-v-69348679].search-input input.form-input--text').type('Восстановить')
    cy.get('div[data-v-69348679].search-input button')
        .click()
    cy.wait(3000)
    cy.get('button[data-v-db1dcd8a].vacancy-page-card__button').click()
  })
})