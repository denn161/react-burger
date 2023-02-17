export { }

describe('drags ingredients to constructor work correctly', () => {

    beforeEach(() => {
        let email = " denn123161@yandex.ru"
        let password = 'liebe161'
        cy.intercept('POST', "api/auth/login", { fixture: 'user.json' }).as('postLogin')
        cy.intercept("POST", "api/orders", { fixture: "order.json" }).as("postOrder");
        cy.seedAndVisit()
        cy.visit('http://localhost:3000/login')
        cy.viewport(1300, 720)
        cy.get("[data-testid='input-email']").type(`${email}{enter}`)
        cy.get("[data-testid='input-password']").type(`${password}{enter}`)      
        cy.setCookie('accessToken',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWM4ZTVhOTlhMjVjMDAxY2Q2ZmUxZiIsImlhdCI6MTY3NjU4Mjk5MiwiZXhwIjoxNjc2NTg0MTkyfQ.OdThWcwjbPMXlLZYgDaulHJiO6csSwbIe8p74DF8Dvw')

    })

    

    it('should drag and drop ingredients, login and place an order', () => {
        cy.wait("@postLogin").its('request.body').should('deep.equal', {
            email: 'denn123161@yandex.ru',
            password: 'liebe161'
        })    

     
       
        cy.get("[data-testid='ingredients']").contains("Флюоресцентная булка R2-D3")
            .trigger('dragstart').trigger('dragleave')
        cy.get("[data-testid=constructor-drop]")
            .trigger('dragenter')
            .trigger('dragover')
            .trigger('drop')
            .trigger('dragend');
        cy.get("[data-testid=bun-element-верх]").contains('Флюоресцентная булка R2-D3').should('exist')
        cy.get("[data-testid=bun-element-низ]").contains('Флюоресцентная булка R2-D3').should('exist')

        cy.get("[data-testid='Филе Люминесцентного тетраодонтимформа']")
            .trigger('dragstart').trigger('dragleave')
        cy.get("[data-testid=constructor-drop]")
            .trigger('dragenter')
            .trigger('dragover')
            .trigger('drop')
            .trigger('dragend');
        cy.get("[data-testid=filling-element]")
            .contains('Филе Люминесцентного тетраодонтимформа').should('exist')

        cy.get("[data-testid='Мясо бессмертных моллюсков Protostomia']")
            .trigger('dragstart').trigger('dragleave')
        cy.get("[data-testid=constructor-drop]")
            .trigger('dragenter')
            .trigger('dragover')
            .trigger('drop')
            .trigger('dragend');
        cy.get("[data-testid=filling-element]").contains('Мясо бессмертных моллюсков Protostomia').should('exist')

        cy.get("[data-testid='Говяжий метеорит (отбивная)']")
            .trigger('dragstart').trigger('dragleave')
        cy.get("[data-testid=constructor-drop]")
            .trigger('dragenter')
            .trigger('dragover')
            .trigger('drop')
            .trigger('dragend');
        cy.get("[data-testid=filling-element]")
            .contains('Говяжий метеорит (отбивная)').should('exist')
        cy.get("[data-testid='Биокотлета из марсианской Магнолии']")
            .trigger('dragstart').trigger('dragleave')
        cy.get("[data-testid=constructor-drop]")
            .trigger('dragenter')
            .trigger('dragover')
            .trigger('drop')
            .trigger('dragend');
        cy.get("[data-testid=filling-element]")
            .contains('Биокотлета из марсианской Магнолии').should('exist')
        cy.get("[data-testid=order-button]").trigger('click')
        cy.wait("@postOrder")
        cy.get("[data-testid=order-number]").contains('40969').should('exist')
        cy.get("[data-testid=close-modal]").trigger('click')

    })
   


})