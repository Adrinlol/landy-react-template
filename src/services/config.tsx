interface Config {
  url: {
    API_URL: string;
  },
  sso: {
    AUTH: {
      auth: {
        clientId: string,
        authority: string,
        redirectUri: string
      },
      cache: {
        cacheLocation: string,
        storeAuthStateInCookie: boolean
      },
    }
  }
  scopes: {
    TEAM_SPEND: string,
    USER: string
  },
  routes: {
    organizationManager: string,
    subscriptionSignUp: string,
    pricing: string,
    dashboard: string,
    login: string,
    home: string[]
  }
}

const prod: Config = {
  url: {
    API_URL: 'https://meeting-cost.onrender.com'
  },
  sso: {
    AUTH: {
      auth: {
        clientId: "056e2ea3-e4e8-469d-9e11-8369fb91dfb1",
        authority: "https://login.microsoftonline.com/common/v2.0",
        redirectUri: "https://www.team-spend.com/dashboard"
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
      }
    },
  },
  scopes: {
    TEAM_SPEND: "api://056e2ea3-e4e8-469d-9e11-8369fb91dfb1/TeamSpend.Read.Write",
    USER: "User.Read"
  },
  routes: {
    organizationManager: "/dashboard/organization-manager",
    subscriptionSignUp: "/subsription-sign-up",
    pricing: "/pricing",
    dashboard: "/dashboard",
    login: "/login",
    home: ["/", "/home"]
  }
};

const dev: Config = {
  url: {
    API_URL: 'https://localhost:7216'
  },
  sso: {
    AUTH: {
      auth: {
        clientId: "f8c1f81c-89fc-4f04-96da-bce7926a0ba8",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000/dashboard"
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
      }
    }
  },
  scopes: {
    TEAM_SPEND: "api://f8c1f81c-89fc-4f04-96da-bce7926a0ba8/TeamSpend.Read.Write",
    USER: "User.Read.All"
  },
  routes: {
    organizationManager: "/dashboard/organization-manager",
    subscriptionSignUp: "/subsription-sign-up",
    pricing: "/pricing",
    dashboard: "/dashboard",
    login: "/login",
    home: ["/", "/home"]
  }
};

export const config: Config = process.env.NODE_ENV === 'development' ? dev : prod;