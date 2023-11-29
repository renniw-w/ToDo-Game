package de.wawuschels.todo_game.controller;

import de.wawuschels.todo_game.business.ItemService;
import de.wawuschels.todo_game.business.model.Item;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
public class ItemController {
    private final ItemService itemService;

    @GetMapping("/api/item")
    public ResponseEntity<List<Item>> findAll() {
        return ResponseEntity.ok(itemService.findAll());
    }

    @GetMapping("/api/item/{id}")
    public ResponseEntity<Item> find(@PathVariable Long id) {
        return ResponseEntity.ok(itemService.findById(id));
    }

    @DeleteMapping(value = "/api/item/{id}")
    public void deleteItem(@PathVariable Long id) {
        itemService.deleteById(id);
    }

    @PostMapping(value = "/api/item", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> edit(@RequestBody Item item) {
        try {
            itemService.addOrEditItem(item);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            return ResponseEntity.badRequest().build();
        }
    }

}



