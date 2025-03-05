### Roster Details<br />
Team Name: FLUFFY MAFIA<br />
Roster: bored3m, daria, PiggyKiki, s4kUra, sckrafft<br />
Global Rank: [213](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [128]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  614.5<br />
<br />
Final Rank Value (614.5) = Starting Rank Value (611.1) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 611.1
- 400 + ( ( 0.111 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 611.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1875 | 2024-10-18 | TSM Impact       | L   | 0.308      | -            | -                | -                | -         |    -5.03 | bored3m, daria, PiggyKiki, s4kUra, sckrafft |
|            5 |     2235 | 2024-10-03 | Aware Impact     | W   | 0.208      | 0.333        | 0.001 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     3.08 | bored3m, daria, PiggyKiki, s4kUra, sckrafft |
|            4 |     2523 | 2024-09-25 | Blue Otter Karma | W   | 0.155      | 0.333        | 0.001 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     2.31 | bored3m, daria, PiggyKiki, s4kUra, sckrafft |
|            3 |     2766 | 2024-09-18 | Lotus            | W   | 0.108      | 0.333        | 0.001 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.60 | bored3m, daria, PiggyKiki, s4kUra, sckrafft |
|            2 |     2933 | 2024-09-12 | Imp Pact         | W   | 0.068      | 0.333        | 0.002 (0.000)    | 0.041 (0.001)    | 0 (0.000) |     1.07 | bored3m, daria, PiggyKiki, s4kUra, sckrafft |
|            1 |     3119 | 2024-09-05 | Nouns.fe         | W   | 0.021      | 0.333        | 0.001 (0.000)    | 0.091 (0.001)    | 0 (0.000) |     0.33 | bored3m, mira, PiggyKiki, s4kUra, sckrafft  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($615.83)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      0.308 | $2,000.00      | $615.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
