import { getLinkedFields } from "../../../extensions"

export const PRODUCT_DETAIL_FIELDS = getLinkedFields(
  "product",
  "*categories,-variants,*product_item_type"
)
