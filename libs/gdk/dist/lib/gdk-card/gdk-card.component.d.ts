import { OnInit } from "@angular/core";
/**
 * A card to be used for shell libs with input and output aside, a preview and code areas.
 */
export declare class GdkCardComponent implements OnInit {
    /**
     * The title for the card.
     */
    title: string;
    /**
     * The subtitle for the card.
     */
    subtitle: string;
    /**
     * Flag to control right aside for summary info.
     */
    summary: boolean;
    /**
     * Flag to not show inputs in aside.
     */
    withoutInput: boolean;
    /**
     * Flag to not show outputs in aside.
     */
    withoutOutput: boolean;
    constructor();
    ngOnInit(): void;
}
