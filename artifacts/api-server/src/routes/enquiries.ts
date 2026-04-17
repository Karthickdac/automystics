import { Router, type IRouter } from "express";
import { db, enquiriesTable, insertEnquirySchema } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

router.post("/enquiries", async (req, res) => {
  const parsed = insertEnquirySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "validation_failed", issues: parsed.error.flatten() });
    return;
  }
  try {
    const [row] = await db
      .insert(enquiriesTable)
      .values({
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        email: parsed.data.email,
        company: parsed.data.company || null,
        message: parsed.data.message,
      })
      .returning({ id: enquiriesTable.id });
    res.status(201).json({ ok: true, id: row.id });
  } catch (err) {
    req.log?.error({ err }, "failed to insert enquiry");
    res.status(500).json({ error: "server_error" });
  }
});

export default router;

export const adminEnquiriesRouter: IRouter = Router();

adminEnquiriesRouter.get("/enquiries", async (_req, res) => {
  const rows = await db
    .select()
    .from(enquiriesTable)
    .orderBy(desc(enquiriesTable.createdAt))
    .limit(500);
  res.json({ enquiries: rows });
});
