import { Router, type IRouter } from "express";
import healthRouter from "./health";
import enquiriesRouter from "./enquiries";
import adminRouter from "./admin";
import siteSettingsRouter from "./site-settings";

const router: IRouter = Router();

router.use(healthRouter);
router.use(enquiriesRouter);
router.use(siteSettingsRouter);
router.use("/admin", adminRouter);

export default router;
