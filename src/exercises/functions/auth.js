function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  if (data.password != data.confirmPassword) {
    setPasswordsAreNotEqual(true);
    return;
  }

  const user = {
    email: data.email,
    password: data.password,
    firstName: data["first-name"],
    lastName: data["last-name"],
    role: data.role,
    termsAccepted: data.terms === "on",
  };

  const response = fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  navigate("/", {
    state: { message: "User successfully registered!" },
  });
}

function handleInputChange(identifier, value) {
  setEnteredValues((prevValues) => ({
    ...prevValues,
    [identifier]: value,
  }));
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  
  const login = async (authData) => {
    console.log(authData)
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    if (!response.ok) {
      throw new Error("Failed to authenticate");
    }

    const data = await response.json();
    setUser({ role: data.role });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function ProtectedRoute({ element }) {
  const { user } = useContext(AuthContext);

  if (user && user.role != "student") {
    return <Navigate to="/login" replace />;
  }

  return element;
}
