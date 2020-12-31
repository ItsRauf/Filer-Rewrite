interface PasswordAuth {
  password: string;
}

interface AuthTypes {
  none: undefined;
  password: PasswordAuth;
}

export interface Auth {
  mode: keyof AuthTypes;
  options: AuthTypes[Auth["mode"]];
}
