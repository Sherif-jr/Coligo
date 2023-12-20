import { Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth-slice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isLoggedIn = useSelector(
    (state: { auth: { isLoggedIn: boolean } }) => state.auth.isLoggedIn
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);
  return (
    <main>
      <div className="container mx-auto min-h-screen flex items-center justify-center">
        <Card className="p-8">
          <CardContent>
            <Typography variant="h3" className="text-center">
              Hi There!
            </Typography>
            <Typography sx={{ marginBottom: "2rem" }} className="text-center">
              Click to Login
            </Typography>
            <Button
              variant="contained"
              className="w-full"
              onClick={() => {
                if (!isLoggedIn) {
                  dispatch(login());
                }
              }}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Home;
