package de.wawuschels.todo_game.business.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Item {

    private Long id;
    private String name;
    private String description;
    private Long score;
}
