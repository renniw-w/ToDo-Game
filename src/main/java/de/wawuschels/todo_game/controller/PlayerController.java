package de.wawuschels.todo_game.controller;

import de.wawuschels.todo_game.business.PlayerService;
import de.wawuschels.todo_game.domain.model.Player;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class PlayerController {
    private final PlayerService playerService;

    @GetMapping("/api/player")
    public List<Player> findAll() {
        return playerService.findAll();
    }

    @GetMapping("/api/player/{id}")
    public Player find(@PathVariable Long id) {
        return playerService.findById(id);
    }
}
