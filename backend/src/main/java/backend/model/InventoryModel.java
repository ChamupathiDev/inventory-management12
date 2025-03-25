package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class InventoryModel {
    @Id
    @GeneratedValue
    private Long id;
    private String itemId;
    private String itemImage;
    private String itemCstegory;
    private String itemQty;
    private String itemDetails;

}
