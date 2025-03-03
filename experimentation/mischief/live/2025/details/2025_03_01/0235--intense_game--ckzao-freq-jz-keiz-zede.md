### Roster Details<br />
Team Name: Intense Game<br />
Roster: ckzao, fREQ, jz, keiz, zede<br />
Global Rank: [235](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [55]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  638.1<br />
<br />
Final Rank Value (638.1) = Starting Rank Value (634.5) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.5
- 400 + ( ( 0.120 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 634.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     3017 | 2024-11-07 | TROPA DO TACO          | L   | 0.441      | -            | -                | -                | -         |    -5.62 | ckzao, fREQ, jz, keiz, zede |
|           11 |     3061 | 2024-11-05 | Sharks Esports         | L   | 0.428      | -            | -                | -                | -         |    -1.83 | ckzao, fREQ, jz, keiz, zede |
|           10 |     3092 | 2024-11-04 | UNO MILLE              | L   | 0.421      | -            | -                | -                | -         |    -4.83 | ckzao, fREQ, jz, keiz, zede |
|            9 |     3117 | 2024-11-03 | Galorys Academy        | W   | 0.415      | 0.143        | 0.001 (0.000)    | 0.039 (0.002)    | 0 (0.000) |     5.80 | ckzao, fREQ, jz, keiz, zede |
|            8 |     3179 | 2024-11-02 | RED Canids Academy     | L   | 0.408      | -            | -                | -                | -         |    -6.41 | ckzao, fREQ, jz, keiz, zede |
|            7 |     3182 | 2024-11-02 | ODDIK                  | L   | 0.407      | -            | -                | -                | -         |    -3.91 | ckzao, fREQ, jz, keiz, zede |
|            6 |     3236 | 2024-11-01 | Team Solid             | L   | 0.401      | -            | -                | -                | -         |    -3.67 | ckzao, fREQ, jz, keiz, zede |
|            5 |     3239 | 2024-11-01 | Bounty Hunters Esports | W   | 0.401      | 0.143        | 0.005 (0.000)    | 0.624 (0.036)    | 0 (0.000) |     7.16 | ckzao, fREQ, jz, keiz, zede |
|            4 |     3253 | 2024-11-01 | 20/70                  | W   | 0.400      | 0.333        | 0.001 (0.000)    | 0.129 (0.017)    | 0 (0.000) |     6.03 | ckzao, fREQ, jz, keiz, zede |
|            3 |     3319 | 2024-10-30 | Fluxo                  | L   | 0.387      | -            | -                | -                | -         |    -2.07 | ckzao, fREQ, jz, keiz, zede |
|            2 |     3357 | 2024-10-29 | América eSports        | W   | 0.381      | 0.143        | 0.000 (0.000)    | 0.389 (0.021)    | 0 (0.000) |     5.10 | ckzao, fREQ, jz, keiz, zede |
|            1 |     3376 | 2024-10-28 | AdalYamigos            | W   | 0.375      | 0.143        | 0.003 (0.000)    | 0.232 (0.012)    | 0 (0.000) |     7.83 | ckzao, fREQ, jz, keiz, zede |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($857.54)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-05 |      0.429 | $1,035.89      | $444.21         |
| 2024-11-03 |      0.413 | $1,000.00      | $413.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
