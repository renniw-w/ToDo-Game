package de.wawuschels.todo_game.controller;

import de.wawuschels.todo_game.business.PlayerWorkItemService;
import de.wawuschels.todo_game.domain.model.PlayerWorkItem;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class PlayerWorkItemController {
    private final PlayerWorkItemService playerWorkItemService;

    @GetMapping("/api/playerWorkItem")
    public List<PlayerWorkItem> findAll(){return playerWorkItemService.findAll();}

    @GetMapping("api/playerWorkItem/{id}")
    public PlayerWorkItem find(@PathVariable Long id){
        return playerWorkItemService.findById(id);
    }


}
