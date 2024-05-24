// LoginPageActions.ts
import LoginPageElements from './LoginPageElements'; // Import the elements

const loginPage = new LoginPageElements

export class LoginPageActions {
    login: (username: string, password: string) => Promise<void>;
    // ... other actions for the login page
}

class LoginPageActions implements LoginPageActions {
    constructor(private readonly elements: loginPage, private readonly page: any) { } // Inject elements and page

    async login(username: string, password: string): Promise<void> {
        await this.elements.usernameInput(this.page).fill(username);
        await this.elements.passwordInput(this.page).fill(password);
        await this.elements.submitButton(this.page).click();
    }

    // ... other action methods using the injected elements and page
}

export default LoginPageActions;
