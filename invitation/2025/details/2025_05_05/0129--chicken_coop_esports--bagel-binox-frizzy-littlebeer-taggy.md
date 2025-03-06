### Roster Details<br />
Team Name: Chicken Coop Esports<br />
Roster: BAGEL, BiNoX, FRIZZY, LittleBEER, taggy<br />
Global Rank: [129](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [29]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  627.0<br />
<br />
Final Rank Value (627.0) = Starting Rank Value (661.6) + Head To Head Adjustments (-34.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 661.6
- 400 + ( ( 0.120 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 661.6


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
|            8 |      357 | 2025-02-10 | MIGHT              | L   | 0.639      | -            | -                | -                | -         |   -12.40 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            7 |      395 | 2025-02-09 | Party Astronauts   | L   | 0.632      | -            | -                | -                | -         |   -12.51 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            6 |      436 | 2025-02-08 | LAG Gaming         | W   | 0.626      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.82 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            5 |      907 | 2024-12-12 | Bad News Capybaras | L   | 0.241      | -            | -                | -                | -         |    -5.09 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            4 |      934 | 2024-12-10 | Bad News Capybaras | L   | 0.227      | -            | -                | -                | -         |    -4.88 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            3 |      975 | 2024-12-07 | Alter Iron Club    | L   | 0.207      | -            | -                | -                | -         |    -2.95 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            2 |     1082 | 2024-12-03 | Make Your Mind     | L   | 0.181      | -            | -                | -                | -         |    -2.54 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            1 |     1103 | 2024-12-02 | MCS Gaming         | W   | 0.174      | 0.372        | 0.002 (0.000)    | 0.070 (0.005)    | 0 (0.000) |     1.90 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($706.29)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.214 | $3,300.00      | $706.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
