import { test } from '@playwright/test';
import { expect } from '@playwright/test';
// import { SignUpPageMain } from './pages/signUpPageMain';
import { Registration } from './pages/registration';


test.describe('Sign Up Page Tests', () => {
    // let signUpPageMain: SignUpPageMain;
    let registration: Registration;

    
    test.beforeEach(async ({ page }) => {
        // signUpPageMain = new SignUpPageMain(page);
        registration = new Registration(page); 
        await registration.openSignUp();
        
       
    });
    test.afterEach(async ({page})=>{
        await page.close();
    });
    test('Validate page title and URL', async (page) => {
        await registration.validateTitle();
    });

    test('Registration form input form validation', async () =>{
        await registration.fillRegistrationForm( 
            'Test User',
            'test@example.com',
            'StrongPass123!',
            'StrongPass123!',
            true,);
            await expect(registration.name).toHaveValue('Test User');
            await expect(registration.email).toHaveValue('test@example.com');
            await expect(registration.password).toHaveValue('StrongPass123!');
            await expect(registration.confirmPassword).toHaveValue('StrongPass123!');
            await expect(registration.acceptCheckBox).toBeChecked();
    });

})


