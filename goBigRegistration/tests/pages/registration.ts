import { Page, Locator, expect } from '@playwright/test';
export class Registration{
    readonly page: Page;
    readonly goBigReviewLogo: Locator;
    readonly signUpLogo: Locator;
    readonly signInWithGoogle: Locator;
    readonly orWithEmail: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly useOfCharactersForPassword: Locator;
    readonly confirmPassword: Locator;
    readonly acceptCheckBox: Locator;
    readonly signUpButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.goBigReviewLogo = page.locator('.btn-link.mb-7.d-block.mx-auto.w-auto');
        this.signUpLogo = page.locator('.text-gray-900 fw-bolder mb-3');
        this.signInWithGoogle = page.locator('a./auth/google', {hasText:'Sign in with Google'});
        this.orWithEmail = page.locator('..w-125px.text-gray-500.fw-semibold.fs-7');
        this.name = page.locator('input[name="name"]');
        this.email = page.locator('input[name="email"]');
        this.password = page.locator('input[name="password"]');
        this.useOfCharactersForPassword = page.locator('.text-muted', {hasText:'Use 8 or more characters with a mix of letters, numbers & symbols.'});
        this.confirmPassword = page.locator('input[name="confirm-password"]');
        this.acceptCheckBox = page.locator('.form-check-input').first();
        this.signUpButton = page.locator('button[type="submit"]', {hasText: 'Sign up'});


}
async openSignUp() {
    await this.page.goto('https://gobigreviews.com/register');
}
async validateTitle() {
    await expect(this.page).toHaveTitle("Sign Up");
    
}
async validateURL(){
await expect(this.page).toHaveURL("https://gobigreviews.com/register")
};

async fillRegistrationForm(
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    accept: boolean=true
){
await this.name.fill(name);
await this.email.fill(email);
await this.password.fill(password);
await this.confirmPassword.fill(confirmPassword);
    if (accept)
         {await this.acceptCheckBox.check()};

}
async signUpButtonClick() {
    await this.signUpButton.isDisabled();
    await this.signUpButton.click();
}

};