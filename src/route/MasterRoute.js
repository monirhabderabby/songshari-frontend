import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "../components/shared/RequireAuth/RequireAuth";
import RequireAuthMobile from "../components/shared/RequireAuth/RequireAuthMobile";
import ShopProducts from "../Wrapper/Shop/ShopProducts/ShopProducts";
import kaziPrivateRoutes from "./Kazi/kaziPrivateRoutes";
import kaziRoutes from "./Kazi/kaziRoutes";
import lawyerPrivateRoutes from "./lawyer/LawyerPrivateRoutes";
import matrimonyPrivateRoutes from "./Matrimony/matrimonyPrivateRoutes";
import matrimonyRoutes from "./Matrimony/matrimonyRoutes";
import mobileMatrimony from "./Matrimony/MobileMatrimony/Mobilematrimony";
import mobileMatrimonyPrivateRoutes from "./Matrimony/MobileMatrimony/MobileMatrimonyPrivateRoutes";
import shopPrivateRoutes from "./shop/shopPrivateRoutes";

// Routes

// Components

const MasterRoute = () => {
  return (
    <BrowserRouter>
      {/* MATRIMONY DESKTOP ROUTES */}
      <Routes>
        {matrimonyRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route?.nestedRoutes?.map((route) => (
              <Route
                key={route.id}
                path={route?.path && route.path}
                element={route?.element && route.element}
              />
            ))}
          </Route>
        ))}
        {/* MATRIMONY PRIVATE ROUTES */}
        {matrimonyPrivateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<RequireAuth>{route.element}</RequireAuth>}
          >
            {route.nestedRoutes?.map((route) => (
              <Route
                key={route.path}
                path={route?.path && route.path}
                element={route?.element && route.element}
              >
                {route.nestedRoutes?.map((route) => (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={<RequireAuth>{route.element}</RequireAuth>}
                  />
                ))}
              </Route>
            ))}
          </Route>
        ))}
        {/* MATRIMONY MOBILE ROUTES */}
        {mobileMatrimony.map((route) => (
          <Route key={route.id} path={route.path} element={route.element}>
            {route.nestedRoutes?.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </Route>
        ))}
        {/* MATRIMONY PRIVATE MOBILE ROUTES */}
        {mobileMatrimonyPrivateRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<RequireAuthMobile>{route.element}</RequireAuthMobile>}
          >
            {route.nestedRoutes?.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={<RequireAuthMobile>{route.element}</RequireAuthMobile>}
              />
            ))}
          </Route>
        ))}
        {/* KAZI ROUTES */}
        {kaziRoutes.map((route) => {
          return (
            <Route key={route.id} path={route.path} element={route.element} />
          );
        })}
        {/* KAZI PRIVATE ROUTES */}
        {kaziPrivateRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={<RequireAuth>{route.element}</RequireAuth>}
            >
              {route.nestedRoutes?.map((route) => {
                return (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={<RequireAuth>{route.element}</RequireAuth>}
                  >
                    {route.nestedRoutes?.map((route) => {
                      return (
                        <Route
                          key={route.id}
                          path={route.path}
                          element={route.element}
                        >
                          {route.nestedRoutes?.map((route) => {
                            return (
                              <Route
                                key={route.id}
                                path={route.path}
                                element={
                                  <RequireAuth>{route.element}</RequireAuth>
                                }
                              />
                            );
                          })}
                        </Route>
                      );
                    })}
                  </Route>
                );
              })}
            </Route>
          );
        })}
        {/* SHOP PRIVATE ROUTES */}
        {shopPrivateRoutes.map((route) => {
          return (
            <Route key={route.id} path={route.path} element={route.element}>
              <Route index element={<ShopProducts />} />
              {route.nestedRoutes?.map((route) => {
                return (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
            </Route>
          );
        })}
        {/* LAWYER PRIVATE ROUTES */}
        {lawyerPrivateRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={<RequireAuth>{route.element}</RequireAuth>}
            >
              {route.nestedRoutes?.map((route) => {
                return (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={<RequireAuth>{route.element}</RequireAuth>}
                  />
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default MasterRoute;
