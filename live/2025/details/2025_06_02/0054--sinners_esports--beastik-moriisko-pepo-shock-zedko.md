### Roster Details<br />
Team Name: SINNERS Esports<br />
Roster: beastik, MoriiSko, Pepo, SHOCK, ZEDKO<br />
Global Rank: [54](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [37]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  738.3<br />
<br />
Final Rank Value (738.3) = Starting Rank Value (758.4) + Head To Head Adjustments (-20.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 758.4
- 400 + ( ( 0.155 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 758.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      207 | 2025-02-16 | ECSTATIC             | L   | 0.491      | -            | -                | -                | -         |    -8.25 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           12 |      250 | 2025-02-15 | Sashi Esport         | L   | 0.482      | -            | -                | -                | -         |    -7.97 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           11 |      312 | 2025-02-12 | ALASKA               | W   | 0.464      | 0.435        | 0.026 (0.005)    | 0.560 (0.113)    | 0 (0.000) |    10.96 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|           10 |      399 | 2025-02-09 | Fire Flux Esports    | L   | 0.445      | -            | -                | -                | -         |    -7.14 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|            9 |      502 | 2025-02-07 | Monte                | W   | 0.430      | 0.435        | 0.004 (0.001)    | 0.367 (0.069)    | 0 (0.000) |     6.53 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|            8 |      539 | 2025-02-05 | OG                   | L   | 0.419      | -            | -                | -                | -         |    -9.46 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|            7 |      576 | 2025-02-04 | Alliance             | L   | 0.411      | -            | -                | -                | -         |    -9.56 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|            6 |      608 | 2025-02-01 | GTZ.ESPORTS          | W   | 0.392      | 0.435        | 0.002 (0.000)    | 0.254 (0.043)    | 0 (0.000) |     6.21 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|            5 |      696 | 2025-01-11 | Wildcard             | L   | 0.251      | -            | -                | -                | -         |    -0.79 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|            4 |      705 | 2025-01-10 | KONO.ECF             | W   | 0.243      | 0.417        | 0.000 (0.000)    | 0.533 (0.054)    | 0 (0.000) |     1.79 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO  |
|            3 |      896 | 2024-12-13 | ECSTATIC             | L   | 0.058      | -            | -                | -                | -         |    -0.93 | beastik, majky, MoriiSko, oskar, SHOCK |
|            2 |      904 | 2024-12-13 | Team Spirit Academy  | L   | 0.056      | -            | -                | -                | -         |    -0.88 | beastik, majky, MoriiSko, oskar, SHOCK |
|            1 |      911 | 2024-12-12 | Natus Vincere Junior | L   | 0.052      | -            | -                | -                | -         |    -0.63 | beastik, majky, MoriiSko, oskar, SHOCK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,286.11)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-12 |      0.257 | $5,000.00      | $1,286.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
