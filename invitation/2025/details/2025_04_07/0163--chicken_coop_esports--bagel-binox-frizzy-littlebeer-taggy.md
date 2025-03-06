### Roster Details<br />
Team Name: Chicken Coop Esports<br />
Roster: BAGEL, BiNoX, FRIZZY, LittleBEER, taggy<br />
Global Rank: [163](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [44]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  623.4<br />
<br />
Final Rank Value (623.4) = Starting Rank Value (654.6) + Head To Head Adjustments (-31.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.6
- 400 + ( ( 0.123 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 654.6


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
|            8 |      357 | 2025-02-10 | MIGHT              | L   | 0.826      | -            | -                | -                | -         |   -11.25 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            7 |      395 | 2025-02-09 | Party Astronauts   | L   | 0.819      | -            | -                | -                | -         |   -10.65 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            6 |      436 | 2025-02-08 | LAG Gaming         | W   | 0.812      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.76 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            5 |      907 | 2024-12-12 | Bad News Capybaras | L   | 0.427      | -            | -                | -                | -         |    -6.83 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            4 |      934 | 2024-12-10 | Bad News Capybaras | L   | 0.414      | -            | -                | -                | -         |    -6.77 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            3 |      975 | 2024-12-07 | Alter Iron Club    | L   | 0.394      | -            | -                | -                | -         |    -5.39 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            2 |     1082 | 2024-12-03 | Make Your Mind     | L   | 0.367      | -            | -                | -                | -         |    -5.11 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |
|            1 |     1103 | 2024-12-02 | MCS Gaming         | W   | 0.361      | 0.372        | 0.002 (0.000)    | 0.066 (0.009)    | 0 (0.000) |     5.05 | BAGEL, Freaky, FRIZZY, LittleBEER, supa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,322.29)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.401 | $3,300.00      | $1,322.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
