### Roster Details<br />
Team Name: Undone<br />
Roster: chop, cxzi, motm, Skadoodle, steel<br />
Global Rank: [106](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [22]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  769.3<br />
<br />
Final Rank Value (769.3) = Starting Rank Value (759.6) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 759.6
- 400 + ( ( 0.189 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 759.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      860 | 2024-12-14 | Bad News Capybaras      | W   | 0.689      | 0.327        | 0.001 (0.000)    | 0.148 (0.033)    | 0 (0.000) |     7.86 | chop, cxzi, motm, Skadoodle, steel |
|           14 |      887 | 2024-12-13 | Alter Iron Club         | W   | 0.683      | 0.327        | 0.008 (0.002)    | 0.331 (0.074)    | 0 (0.000) |     9.07 | chop, cxzi, motm, Skadoodle, steel |
|           13 |      922 | 2024-12-11 | Bad News Capybaras      | W   | 0.669      | 0.327        | 0.001 (0.000)    | 0.148 (0.032)    | 0 (0.000) |     7.81 | chop, cxzi, motm, Skadoodle, steel |
|           12 |      933 | 2024-12-10 | InControl               | W   | 0.662      | 0.327        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.66 | chop, cxzi, motm, Skadoodle, steel |
|           11 |      962 | 2024-12-08 | Nouns Esports           | L   | 0.647      | -            | -                | -                | -         |    -6.91 | chop, cxzi, motm, steel, taggy     |
|           10 |      971 | 2024-12-07 | MIGHT                   | W   | 0.643      | 0.455        | 0.002 (0.001)    | 0.289 (0.085)    | 1 (0.643) |     9.52 | chop, cxzi, motm, steel, taggy     |
|            9 |      977 | 2024-12-07 | Fisher College          | W   | 0.642      | 0.455        | 0.006 (0.002)    | 0.128 (0.037)    | 1 (0.642) |    10.31 | chop, cxzi, motm, steel, taggy     |
|            8 |      980 | 2024-12-07 | NRG                     | L   | 0.641      | -            | -                | -                | -         |    -3.79 | chop, cxzi, motm, steel, taggy     |
|            7 |     1001 | 2024-12-06 | Anti-Eco Club           | W   | 0.636      | 0.455        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.636) |     2.70 | chop, cxzi, motm, steel, taggy     |
|            6 |     1031 | 2024-12-05 | Alter Iron Club         | L   | 0.629      | -            | -                | -                | -         |   -11.29 | chop, cxzi, motm, Skadoodle, steel |
|            5 |     1104 | 2024-12-02 | Make Your Mind          | L   | 0.609      | -            | -                | -                | -         |   -11.30 | chop, cxzi, motm, Skadoodle, steel |
|            4 |     1275 | 2024-11-23 | BOSS                    | L   | 0.547      | -            | -                | -                | -         |    -5.11 | chop, cxzi, motm, Skadoodle, steel |
|            3 |     2386 | 2024-09-29 | Party Astronauts        | L   | 0.182      | -            | -                | -                | -         |    -2.81 | BeaKie, chop, cxzi, motm, stamina  |
|            2 |     2770 | 2024-09-18 | Mythic                  | W   | 0.108      | 0.371        | 0.000 (0.000)    | 0.029 (0.001)    | 0 (0.000) |     0.61 | BeaKie, chop, cxzi, motm, stamina  |
|            1 |     2821 | 2024-09-16 | Penance (American Team) | W   | 0.094      | 0.371        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.35 | BeaKie, chop, cxzi, motm, stamina  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($811.28)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.649 | $1,250.00      | $811.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
