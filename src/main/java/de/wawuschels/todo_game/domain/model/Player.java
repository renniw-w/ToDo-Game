package de.wawuschels.todo_game.domain.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name="player")
@Data
public class Player {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;
}
