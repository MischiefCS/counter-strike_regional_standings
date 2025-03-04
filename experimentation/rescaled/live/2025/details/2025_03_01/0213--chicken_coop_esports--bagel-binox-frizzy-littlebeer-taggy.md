### Roster Details<br />
Team Name: Chicken Coop Esports<br />
Roster: BAGEL, BiNoX, FRIZZY, LittleBEER, taggy<br />
Global Rank: [213](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [60]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  610.6<br />
<br />
Final Rank Value (610.6) = Starting Rank Value (645.0) + Head To Head Adjustments (-34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.0
- 400 + ( ( 0.129 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 645.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      357 | 2025-02-10 | MIGHT              | L   | 1.000      | -            | -                | -                | -         |   -11.40 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            7 |      395 | 2025-02-09 | Party Astronauts   | L   | 1.000      | -            | -                | -                | -         |    -8.27 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            6 |      436 | 2025-02-08 | LAG Gaming         | W   | 1.000      | 0.336        | 0.001 (0.000)    | 0.028 (0.009)    | 0 (0.000) |    13.37 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            5 |      907 | 2024-12-12 | Bad News Capybaras | L   | 0.676      | -            | -                | -                | -         |    -9.82 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            4 |      934 | 2024-12-10 | Bad News Capybaras | L   | 0.662      | -            | -                | -                | -         |    -9.98 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            3 |      975 | 2024-12-07 | Alter Iron Club    | L   | 0.642      | -            | -                | -                | -         |    -8.30 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            2 |     1082 | 2024-12-03 | Make Your Mind     | L   | 0.616      | -            | -                | -                | -         |    -8.49 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            1 |     1103 | 2024-12-02 | MCS Gaming         | W   | 0.609      | 0.382        | 0.002 (0.001)    | 0.060 (0.014)    | 0 (0.000) |     8.49 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,141.79)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.649 | $3,300.00      | $2,141.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
