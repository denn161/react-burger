

export{}

describe('drags ingredients to constructor work correctly', () => {

    beforeEach(() => { 
        cy.visit('http://localhost:3000/home')      
        cy.seedAndVisit()      
        cy.viewport(1300, 720)  
       

    })
    it('should be open modal correctly',()=>{
        cy.contains("Краторная булка N-200i").click();
        cy.get("[data-testid='modal']").contains('Детали ингредиента')
        cy.get("[data-testid='close-modal']").click({multiple:true,force:true})
        cy.contains("Филе Люминесцентного тетраодонтимформа").click();
        cy.get("[data-testid='modal']").contains('Детали ингредиента')
        cy.get("[data-testid='close-modal']").click({multiple:true,force:true})
        cy.contains("Мясо бессмертных моллюсков Protostomia").click();
        cy.get("[data-testid='modal']").contains('Детали ингредиента')
        cy.get("[data-testid='close-modal']").click({multiple:true,force:true})
      
      
    })


})