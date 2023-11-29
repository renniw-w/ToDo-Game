package de.wawuschels.todo_game.domain.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "Item")
@Data
public class ItemEntity {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private Long score;

    @Column
    private String description;
}
